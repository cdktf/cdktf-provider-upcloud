# `managedDatabaseMysql` Submodule <a name="`managedDatabaseMysql` Submodule" id="@cdktf/provider-upcloud.managedDatabaseMysql"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDatabaseMysql <a name="ManagedDatabaseMysql" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql upcloud_managed_database_mysql}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_mysql.ManagedDatabaseMysql;

ManagedDatabaseMysql.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .plan(java.lang.String)
    .title(java.lang.String)
    .zone(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .maintenanceWindowDow(java.lang.String)
//  .maintenanceWindowTime(java.lang.String)
//  .network(IResolvable)
//  .network(java.util.List<ManagedDatabaseMysqlNetwork>)
//  .powered(java.lang.Boolean)
//  .powered(IResolvable)
//  .properties(ManagedDatabaseMysqlProperties)
//  .terminationProtection(java.lang.Boolean)
//  .terminationProtection(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.plan">plan</a></code> | <code>java.lang.String</code> | Service plan to use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | Title of a managed database instance. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#id ManagedDatabaseMysql#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User defined key-value pairs to classify the managed database. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.maintenanceWindowDow">maintenanceWindowDow</a></code> | <code>java.lang.String</code> | Maintenance window day of week. Lower case weekday name (monday, tuesday, ...). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.maintenanceWindowTime">maintenanceWindowTime</a></code> | <code>java.lang.String</code> | Maintenance window UTC time in hh:mm:ss format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.network">network</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork">ManagedDatabaseMysqlNetwork</a>></code> | network block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.powered">powered</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The administrative power state of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties">ManagedDatabaseMysqlProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.terminationProtection">terminationProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, prevents the managed service from being powered off, or deleted. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the service.

The name is used as a prefix for the logical hostname. Must be unique within an account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#name ManagedDatabaseMysql#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.plan"></a>

- *Type:* java.lang.String

Service plan to use.

This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#plan ManagedDatabaseMysql#plan}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.title"></a>

- *Type:* java.lang.String

Title of a managed database instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#title ManagedDatabaseMysql#title}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#zone ManagedDatabaseMysql#zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#id ManagedDatabaseMysql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User defined key-value pairs to classify the managed database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#labels ManagedDatabaseMysql#labels}

---

##### `maintenanceWindowDow`<sup>Optional</sup> <a name="maintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.maintenanceWindowDow"></a>

- *Type:* java.lang.String

Maintenance window day of week. Lower case weekday name (monday, tuesday, ...).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#maintenance_window_dow ManagedDatabaseMysql#maintenance_window_dow}

---

##### `maintenanceWindowTime`<sup>Optional</sup> <a name="maintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.maintenanceWindowTime"></a>

- *Type:* java.lang.String

Maintenance window UTC time in hh:mm:ss format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#maintenance_window_time ManagedDatabaseMysql#maintenance_window_time}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.network"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork">ManagedDatabaseMysqlNetwork</a>>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#network ManagedDatabaseMysql#network}

---

##### `powered`<sup>Optional</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.powered"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The administrative power state of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#powered ManagedDatabaseMysql#powered}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties">ManagedDatabaseMysqlProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#properties ManagedDatabaseMysql#properties}

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.terminationProtection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, prevents the managed service from being powered off, or deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#termination_protection ManagedDatabaseMysql#termination_protection}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetMaintenanceWindowDow">resetMaintenanceWindowDow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetMaintenanceWindowTime">resetMaintenanceWindowTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetPowered">resetPowered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetTerminationProtection">resetTerminationProtection</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putNetwork"></a>

```java
public void putNetwork(IResolvable OR java.util.List<ManagedDatabaseMysqlNetwork> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putNetwork.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork">ManagedDatabaseMysqlNetwork</a>>

---

##### `putProperties` <a name="putProperties" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties"></a>

```java
public void putProperties(ManagedDatabaseMysqlProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties">ManagedDatabaseMysqlProperties</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMaintenanceWindowDow` <a name="resetMaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetMaintenanceWindowDow"></a>

```java
public void resetMaintenanceWindowDow()
```

##### `resetMaintenanceWindowTime` <a name="resetMaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetMaintenanceWindowTime"></a>

```java
public void resetMaintenanceWindowTime()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetPowered` <a name="resetPowered" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetPowered"></a>

```java
public void resetPowered()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetTerminationProtection` <a name="resetTerminationProtection" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetTerminationProtection"></a>

```java
public void resetTerminationProtection()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedDatabaseMysql resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_mysql.ManagedDatabaseMysql;

ManagedDatabaseMysql.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_mysql.ManagedDatabaseMysql;

ManagedDatabaseMysql.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_mysql.ManagedDatabaseMysql;

ManagedDatabaseMysql.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_mysql.ManagedDatabaseMysql;

ManagedDatabaseMysql.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ManagedDatabaseMysql.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ManagedDatabaseMysql resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ManagedDatabaseMysql to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ManagedDatabaseMysql that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ManagedDatabaseMysql to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.components">components</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList">ManagedDatabaseMysqlComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.network">network</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList">ManagedDatabaseMysqlNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.nodeStates">nodeStates</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList">ManagedDatabaseMysqlNodeStatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.primaryDatabase">primaryDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference">ManagedDatabaseMysqlPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.serviceHost">serviceHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.servicePassword">servicePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.servicePort">servicePort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.serviceUri">serviceUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.serviceUsername">serviceUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.maintenanceWindowDowInput">maintenanceWindowDowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.maintenanceWindowTimeInput">maintenanceWindowTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.networkInput">networkInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork">ManagedDatabaseMysqlNetwork</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.planInput">planInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.poweredInput">poweredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties">ManagedDatabaseMysqlProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.terminationProtectionInput">terminationProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.maintenanceWindowDow">maintenanceWindowDow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.maintenanceWindowTime">maintenanceWindowTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.plan">plan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.powered">powered</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.terminationProtection">terminationProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.components"></a>

```java
public ManagedDatabaseMysqlComponentsList getComponents();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList">ManagedDatabaseMysqlComponentsList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.network"></a>

```java
public ManagedDatabaseMysqlNetworkList getNetwork();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList">ManagedDatabaseMysqlNetworkList</a>

---

##### `nodeStates`<sup>Required</sup> <a name="nodeStates" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.nodeStates"></a>

```java
public ManagedDatabaseMysqlNodeStatesList getNodeStates();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList">ManagedDatabaseMysqlNodeStatesList</a>

---

##### `primaryDatabase`<sup>Required</sup> <a name="primaryDatabase" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.primaryDatabase"></a>

```java
public java.lang.String getPrimaryDatabase();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.properties"></a>

```java
public ManagedDatabaseMysqlPropertiesOutputReference getProperties();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference">ManagedDatabaseMysqlPropertiesOutputReference</a>

---

##### `serviceHost`<sup>Required</sup> <a name="serviceHost" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.serviceHost"></a>

```java
public java.lang.String getServiceHost();
```

- *Type:* java.lang.String

---

##### `servicePassword`<sup>Required</sup> <a name="servicePassword" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.servicePassword"></a>

```java
public java.lang.String getServicePassword();
```

- *Type:* java.lang.String

---

##### `servicePort`<sup>Required</sup> <a name="servicePort" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.servicePort"></a>

```java
public java.lang.String getServicePort();
```

- *Type:* java.lang.String

---

##### `serviceUri`<sup>Required</sup> <a name="serviceUri" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.serviceUri"></a>

```java
public java.lang.String getServiceUri();
```

- *Type:* java.lang.String

---

##### `serviceUsername`<sup>Required</sup> <a name="serviceUsername" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.serviceUsername"></a>

```java
public java.lang.String getServiceUsername();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `maintenanceWindowDowInput`<sup>Optional</sup> <a name="maintenanceWindowDowInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.maintenanceWindowDowInput"></a>

```java
public java.lang.String getMaintenanceWindowDowInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowTimeInput`<sup>Optional</sup> <a name="maintenanceWindowTimeInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.maintenanceWindowTimeInput"></a>

```java
public java.lang.String getMaintenanceWindowTimeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.networkInput"></a>

```java
public java.lang.Object getNetworkInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork">ManagedDatabaseMysqlNetwork</a>>

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.planInput"></a>

```java
public java.lang.String getPlanInput();
```

- *Type:* java.lang.String

---

##### `poweredInput`<sup>Optional</sup> <a name="poweredInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.poweredInput"></a>

```java
public java.lang.Object getPoweredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.propertiesInput"></a>

```java
public ManagedDatabaseMysqlProperties getPropertiesInput();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties">ManagedDatabaseMysqlProperties</a>

---

##### `terminationProtectionInput`<sup>Optional</sup> <a name="terminationProtectionInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.terminationProtectionInput"></a>

```java
public java.lang.Object getTerminationProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `maintenanceWindowDow`<sup>Required</sup> <a name="maintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.maintenanceWindowDow"></a>

```java
public java.lang.String getMaintenanceWindowDow();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowTime`<sup>Required</sup> <a name="maintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.maintenanceWindowTime"></a>

```java
public java.lang.String getMaintenanceWindowTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.plan"></a>

```java
public java.lang.String getPlan();
```

- *Type:* java.lang.String

---

##### `powered`<sup>Required</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.powered"></a>

```java
public java.lang.Object getPowered();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `terminationProtection`<sup>Required</sup> <a name="terminationProtection" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.terminationProtection"></a>

```java
public java.lang.Object getTerminationProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDatabaseMysqlComponents <a name="ManagedDatabaseMysqlComponents" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponents.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_mysql.ManagedDatabaseMysqlComponents;

ManagedDatabaseMysqlComponents.builder()
    .build();
```


### ManagedDatabaseMysqlConfig <a name="ManagedDatabaseMysqlConfig" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_mysql.ManagedDatabaseMysqlConfig;

ManagedDatabaseMysqlConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .plan(java.lang.String)
    .title(java.lang.String)
    .zone(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .maintenanceWindowDow(java.lang.String)
//  .maintenanceWindowTime(java.lang.String)
//  .network(IResolvable)
//  .network(java.util.List<ManagedDatabaseMysqlNetwork>)
//  .powered(java.lang.Boolean)
//  .powered(IResolvable)
//  .properties(ManagedDatabaseMysqlProperties)
//  .terminationProtection(java.lang.Boolean)
//  .terminationProtection(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.plan">plan</a></code> | <code>java.lang.String</code> | Service plan to use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.title">title</a></code> | <code>java.lang.String</code> | Title of a managed database instance. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#id ManagedDatabaseMysql#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User defined key-value pairs to classify the managed database. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.maintenanceWindowDow">maintenanceWindowDow</a></code> | <code>java.lang.String</code> | Maintenance window day of week. Lower case weekday name (monday, tuesday, ...). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.maintenanceWindowTime">maintenanceWindowTime</a></code> | <code>java.lang.String</code> | Maintenance window UTC time in hh:mm:ss format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.network">network</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork">ManagedDatabaseMysqlNetwork</a>></code> | network block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.powered">powered</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The administrative power state of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties">ManagedDatabaseMysqlProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.terminationProtection">terminationProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, prevents the managed service from being powered off, or deleted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the service.

The name is used as a prefix for the logical hostname. Must be unique within an account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#name ManagedDatabaseMysql#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.plan"></a>

```java
public java.lang.String getPlan();
```

- *Type:* java.lang.String

Service plan to use.

This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#plan ManagedDatabaseMysql#plan}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Title of a managed database instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#title ManagedDatabaseMysql#title}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#zone ManagedDatabaseMysql#zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#id ManagedDatabaseMysql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User defined key-value pairs to classify the managed database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#labels ManagedDatabaseMysql#labels}

---

##### `maintenanceWindowDow`<sup>Optional</sup> <a name="maintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.maintenanceWindowDow"></a>

```java
public java.lang.String getMaintenanceWindowDow();
```

- *Type:* java.lang.String

Maintenance window day of week. Lower case weekday name (monday, tuesday, ...).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#maintenance_window_dow ManagedDatabaseMysql#maintenance_window_dow}

---

##### `maintenanceWindowTime`<sup>Optional</sup> <a name="maintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.maintenanceWindowTime"></a>

```java
public java.lang.String getMaintenanceWindowTime();
```

- *Type:* java.lang.String

Maintenance window UTC time in hh:mm:ss format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#maintenance_window_time ManagedDatabaseMysql#maintenance_window_time}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.network"></a>

```java
public java.lang.Object getNetwork();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork">ManagedDatabaseMysqlNetwork</a>>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#network ManagedDatabaseMysql#network}

---

##### `powered`<sup>Optional</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.powered"></a>

```java
public java.lang.Object getPowered();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The administrative power state of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#powered ManagedDatabaseMysql#powered}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.properties"></a>

```java
public ManagedDatabaseMysqlProperties getProperties();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties">ManagedDatabaseMysqlProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#properties ManagedDatabaseMysql#properties}

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.terminationProtection"></a>

```java
public java.lang.Object getTerminationProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, prevents the managed service from being powered off, or deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#termination_protection ManagedDatabaseMysql#termination_protection}

---

### ManagedDatabaseMysqlNetwork <a name="ManagedDatabaseMysqlNetwork" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_mysql.ManagedDatabaseMysqlNetwork;

ManagedDatabaseMysqlNetwork.builder()
    .family(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
    .uuid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork.property.family">family</a></code> | <code>java.lang.String</code> | Network family. Currently only `IPv4` is supported. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork.property.name">name</a></code> | <code>java.lang.String</code> | The name of the network. Must be unique within the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork.property.type">type</a></code> | <code>java.lang.String</code> | The type of the network. Must be private. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork.property.uuid">uuid</a></code> | <code>java.lang.String</code> | Private network UUID. Must reside in the same zone as the database. |

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

Network family. Currently only `IPv4` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#family ManagedDatabaseMysql#family}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the network. Must be unique within the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#name ManagedDatabaseMysql#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the network. Must be private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#type ManagedDatabaseMysql#type}

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

Private network UUID. Must reside in the same zone as the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#uuid ManagedDatabaseMysql#uuid}

---

### ManagedDatabaseMysqlNodeStates <a name="ManagedDatabaseMysqlNodeStates" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_mysql.ManagedDatabaseMysqlNodeStates;

ManagedDatabaseMysqlNodeStates.builder()
    .build();
```


### ManagedDatabaseMysqlProperties <a name="ManagedDatabaseMysqlProperties" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_mysql.ManagedDatabaseMysqlProperties;

ManagedDatabaseMysqlProperties.builder()
//  .adminPassword(java.lang.String)
//  .adminUsername(java.lang.String)
//  .automaticUtilityNetworkIpFilter(java.lang.Boolean)
//  .automaticUtilityNetworkIpFilter(IResolvable)
//  .backupHour(java.lang.Number)
//  .backupMinute(java.lang.Number)
//  .binlogRetentionPeriod(java.lang.Number)
//  .connectTimeout(java.lang.Number)
//  .defaultTimeZone(java.lang.String)
//  .groupConcatMaxLen(java.lang.Number)
//  .informationSchemaStatsExpiry(java.lang.Number)
//  .innodbChangeBufferMaxSize(java.lang.Number)
//  .innodbFlushNeighbors(java.lang.Number)
//  .innodbFtMinTokenSize(java.lang.Number)
//  .innodbFtServerStopwordTable(java.lang.String)
//  .innodbLockWaitTimeout(java.lang.Number)
//  .innodbLogBufferSize(java.lang.Number)
//  .innodbOnlineAlterLogMaxSize(java.lang.Number)
//  .innodbPrintAllDeadlocks(java.lang.Boolean)
//  .innodbPrintAllDeadlocks(IResolvable)
//  .innodbReadIoThreads(java.lang.Number)
//  .innodbRollbackOnTimeout(java.lang.Boolean)
//  .innodbRollbackOnTimeout(IResolvable)
//  .innodbThreadConcurrency(java.lang.Number)
//  .innodbWriteIoThreads(java.lang.Number)
//  .interactiveTimeout(java.lang.Number)
//  .internalTmpMemStorageEngine(java.lang.String)
//  .ipFilter(java.util.List<java.lang.String>)
//  .logOutput(java.lang.String)
//  .longQueryTime(java.lang.Number)
//  .maxAllowedPacket(java.lang.Number)
//  .maxHeapTableSize(java.lang.Number)
//  .migration(ManagedDatabaseMysqlPropertiesMigration)
//  .netBufferLength(java.lang.Number)
//  .netReadTimeout(java.lang.Number)
//  .netWriteTimeout(java.lang.Number)
//  .publicAccess(java.lang.Boolean)
//  .publicAccess(IResolvable)
//  .serviceLog(java.lang.Boolean)
//  .serviceLog(IResolvable)
//  .slowQueryLog(java.lang.Boolean)
//  .slowQueryLog(IResolvable)
//  .sortBufferSize(java.lang.Number)
//  .sqlMode(java.lang.String)
//  .sqlRequirePrimaryKey(java.lang.Boolean)
//  .sqlRequirePrimaryKey(IResolvable)
//  .tmpTableSize(java.lang.Number)
//  .version(java.lang.String)
//  .waitTimeout(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | Custom password for admin user. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | Custom username for admin user. This must be set only when a new service is being created. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.automaticUtilityNetworkIpFilter">automaticUtilityNetworkIpFilter</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.backupHour">backupHour</a></code> | <code>java.lang.Number</code> | The hour of day (in UTC) when backup for the service is started. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.backupMinute">backupMinute</a></code> | <code>java.lang.Number</code> | The minute of an hour when backup for the service is started. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.binlogRetentionPeriod">binlogRetentionPeriod</a></code> | <code>java.lang.Number</code> | The minimum amount of time in seconds to keep binlog entries before deletion. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.connectTimeout">connectTimeout</a></code> | <code>java.lang.Number</code> | The number of seconds that the mysqld server waits for a connect packet before responding with Bad handshake. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.defaultTimeZone">defaultTimeZone</a></code> | <code>java.lang.String</code> | Default server time zone as an offset from UTC (from -12:00 to +12:00), a time zone name, or 'SYSTEM' to use the MySQL server default. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.groupConcatMaxLen">groupConcatMaxLen</a></code> | <code>java.lang.Number</code> | The maximum permitted result length in bytes for the GROUP_CONCAT() function. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.informationSchemaStatsExpiry">informationSchemaStatsExpiry</a></code> | <code>java.lang.Number</code> | The time, in seconds, before cached statistics expire. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbChangeBufferMaxSize">innodbChangeBufferMaxSize</a></code> | <code>java.lang.Number</code> | Maximum size for the InnoDB change buffer, as a percentage of the total size of the buffer pool. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbFlushNeighbors">innodbFlushNeighbors</a></code> | <code>java.lang.Number</code> | Specifies whether flushing a page from the InnoDB buffer pool also flushes other dirty pages in the same extent (default is 1): 0 - dirty pages in the same extent are not flushed, 1 - flush contiguous dirty pages in the same extent, 2 - flush dirty pages in the same extent. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbFtMinTokenSize">innodbFtMinTokenSize</a></code> | <code>java.lang.Number</code> | Minimum length of words that are stored in an InnoDB FULLTEXT index. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbFtServerStopwordTable">innodbFtServerStopwordTable</a></code> | <code>java.lang.String</code> | This option is used to specify your own InnoDB FULLTEXT index stopword list for all InnoDB tables. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbLockWaitTimeout">innodbLockWaitTimeout</a></code> | <code>java.lang.Number</code> | The length of time in seconds an InnoDB transaction waits for a row lock before giving up. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbLogBufferSize">innodbLogBufferSize</a></code> | <code>java.lang.Number</code> | The size in bytes of the buffer that InnoDB uses to write to the log files on disk. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbOnlineAlterLogMaxSize">innodbOnlineAlterLogMaxSize</a></code> | <code>java.lang.Number</code> | The upper limit in bytes on the size of the temporary log files used during online DDL operations for InnoDB tables. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbPrintAllDeadlocks">innodbPrintAllDeadlocks</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled, information about all deadlocks in InnoDB user transactions is recorded in the error log. Disabled by default. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbReadIoThreads">innodbReadIoThreads</a></code> | <code>java.lang.Number</code> | The number of I/O threads for read operations in InnoDB. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbRollbackOnTimeout">innodbRollbackOnTimeout</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled a transaction timeout causes InnoDB to abort and roll back the entire transaction. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbThreadConcurrency">innodbThreadConcurrency</a></code> | <code>java.lang.Number</code> | Defines the maximum number of threads permitted inside of InnoDB. Default is 0 (infinite concurrency - no limit). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbWriteIoThreads">innodbWriteIoThreads</a></code> | <code>java.lang.Number</code> | The number of I/O threads for write operations in InnoDB. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.interactiveTimeout">interactiveTimeout</a></code> | <code>java.lang.Number</code> | The number of seconds the server waits for activity on an interactive connection before closing it. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.internalTmpMemStorageEngine">internalTmpMemStorageEngine</a></code> | <code>java.lang.String</code> | The storage engine for in-memory internal temporary tables. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.ipFilter">ipFilter</a></code> | <code>java.util.List<java.lang.String></code> | IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.logOutput">logOutput</a></code> | <code>java.lang.String</code> | The slow log output destination when slow_query_log is ON. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.longQueryTime">longQueryTime</a></code> | <code>java.lang.Number</code> | The slow_query_logs work as SQL statements that take more than long_query_time seconds to execute. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.maxAllowedPacket">maxAllowedPacket</a></code> | <code>java.lang.Number</code> | Size of the largest message in bytes that can be received by the server. Default is 67108864 (64M). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.maxHeapTableSize">maxHeapTableSize</a></code> | <code>java.lang.Number</code> | Limits the size of internal in-memory tables. Also set tmp_table_size. Default is 16777216 (16M). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.migration">migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration">ManagedDatabaseMysqlPropertiesMigration</a></code> | migration block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.netBufferLength">netBufferLength</a></code> | <code>java.lang.Number</code> | Start sizes of connection buffer and result buffer. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.netReadTimeout">netReadTimeout</a></code> | <code>java.lang.Number</code> | The number of seconds to wait for more data from a connection before aborting the read. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.netWriteTimeout">netWriteTimeout</a></code> | <code>java.lang.Number</code> | The number of seconds to wait for a block to be written to a connection before aborting the write. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.publicAccess">publicAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Public Access. Allow access to the service from the public Internet. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.serviceLog">serviceLog</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Service logging. Store logs for the service so that they are available in the HTTP API and console. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.slowQueryLog">slowQueryLog</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Slow query log enables capturing of slow queries. Setting slow_query_log to false also truncates the mysql.slow_log table. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.sortBufferSize">sortBufferSize</a></code> | <code>java.lang.Number</code> | Sort buffer size in bytes for ORDER BY optimization. Default is 262144 (256K). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.sqlMode">sqlMode</a></code> | <code>java.lang.String</code> | Global SQL mode. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.sqlRequirePrimaryKey">sqlRequirePrimaryKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Require primary key to be defined for new tables or old tables modified with ALTER TABLE and fail if missing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.tmpTableSize">tmpTableSize</a></code> | <code>java.lang.Number</code> | Limits the size of internal in-memory tables. Also set max_heap_table_size. Default is 16777216 (16M). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.version">version</a></code> | <code>java.lang.String</code> | MySQL major version. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.waitTimeout">waitTimeout</a></code> | <code>java.lang.Number</code> | The number of seconds the server waits for activity on a noninteractive connection before closing it. |

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

Custom password for admin user.

Defaults to random string. This must be set only when a new service is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#admin_password ManagedDatabaseMysql#admin_password}

---

##### `adminUsername`<sup>Optional</sup> <a name="adminUsername" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

Custom username for admin user. This must be set only when a new service is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#admin_username ManagedDatabaseMysql#admin_username}

---

##### `automaticUtilityNetworkIpFilter`<sup>Optional</sup> <a name="automaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.automaticUtilityNetworkIpFilter"></a>

```java
public java.lang.Object getAutomaticUtilityNetworkIpFilter();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#automatic_utility_network_ip_filter ManagedDatabaseMysql#automatic_utility_network_ip_filter}

---

##### `backupHour`<sup>Optional</sup> <a name="backupHour" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.backupHour"></a>

```java
public java.lang.Number getBackupHour();
```

- *Type:* java.lang.Number

The hour of day (in UTC) when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#backup_hour ManagedDatabaseMysql#backup_hour}

---

##### `backupMinute`<sup>Optional</sup> <a name="backupMinute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.backupMinute"></a>

```java
public java.lang.Number getBackupMinute();
```

- *Type:* java.lang.Number

The minute of an hour when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#backup_minute ManagedDatabaseMysql#backup_minute}

---

##### `binlogRetentionPeriod`<sup>Optional</sup> <a name="binlogRetentionPeriod" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.binlogRetentionPeriod"></a>

```java
public java.lang.Number getBinlogRetentionPeriod();
```

- *Type:* java.lang.Number

The minimum amount of time in seconds to keep binlog entries before deletion.

This may be extended for services that require binlog entries for longer than the default for example if using the MySQL Debezium Kafka connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#binlog_retention_period ManagedDatabaseMysql#binlog_retention_period}

---

##### `connectTimeout`<sup>Optional</sup> <a name="connectTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.connectTimeout"></a>

```java
public java.lang.Number getConnectTimeout();
```

- *Type:* java.lang.Number

The number of seconds that the mysqld server waits for a connect packet before responding with Bad handshake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#connect_timeout ManagedDatabaseMysql#connect_timeout}

---

##### `defaultTimeZone`<sup>Optional</sup> <a name="defaultTimeZone" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.defaultTimeZone"></a>

```java
public java.lang.String getDefaultTimeZone();
```

- *Type:* java.lang.String

Default server time zone as an offset from UTC (from -12:00 to +12:00), a time zone name, or 'SYSTEM' to use the MySQL server default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#default_time_zone ManagedDatabaseMysql#default_time_zone}

---

##### `groupConcatMaxLen`<sup>Optional</sup> <a name="groupConcatMaxLen" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.groupConcatMaxLen"></a>

```java
public java.lang.Number getGroupConcatMaxLen();
```

- *Type:* java.lang.Number

The maximum permitted result length in bytes for the GROUP_CONCAT() function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#group_concat_max_len ManagedDatabaseMysql#group_concat_max_len}

---

##### `informationSchemaStatsExpiry`<sup>Optional</sup> <a name="informationSchemaStatsExpiry" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.informationSchemaStatsExpiry"></a>

```java
public java.lang.Number getInformationSchemaStatsExpiry();
```

- *Type:* java.lang.Number

The time, in seconds, before cached statistics expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#information_schema_stats_expiry ManagedDatabaseMysql#information_schema_stats_expiry}

---

##### `innodbChangeBufferMaxSize`<sup>Optional</sup> <a name="innodbChangeBufferMaxSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbChangeBufferMaxSize"></a>

```java
public java.lang.Number getInnodbChangeBufferMaxSize();
```

- *Type:* java.lang.Number

Maximum size for the InnoDB change buffer, as a percentage of the total size of the buffer pool.

Default is 25.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#innodb_change_buffer_max_size ManagedDatabaseMysql#innodb_change_buffer_max_size}

---

##### `innodbFlushNeighbors`<sup>Optional</sup> <a name="innodbFlushNeighbors" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbFlushNeighbors"></a>

```java
public java.lang.Number getInnodbFlushNeighbors();
```

- *Type:* java.lang.Number

Specifies whether flushing a page from the InnoDB buffer pool also flushes other dirty pages in the same extent (default is 1): 0 - dirty pages in the same extent are not flushed, 1 - flush contiguous dirty pages in the same extent, 2 - flush dirty pages in the same extent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#innodb_flush_neighbors ManagedDatabaseMysql#innodb_flush_neighbors}

---

##### `innodbFtMinTokenSize`<sup>Optional</sup> <a name="innodbFtMinTokenSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbFtMinTokenSize"></a>

```java
public java.lang.Number getInnodbFtMinTokenSize();
```

- *Type:* java.lang.Number

Minimum length of words that are stored in an InnoDB FULLTEXT index.

Changing this parameter will lead to a restart of the MySQL service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#innodb_ft_min_token_size ManagedDatabaseMysql#innodb_ft_min_token_size}

---

##### `innodbFtServerStopwordTable`<sup>Optional</sup> <a name="innodbFtServerStopwordTable" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbFtServerStopwordTable"></a>

```java
public java.lang.String getInnodbFtServerStopwordTable();
```

- *Type:* java.lang.String

This option is used to specify your own InnoDB FULLTEXT index stopword list for all InnoDB tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#innodb_ft_server_stopword_table ManagedDatabaseMysql#innodb_ft_server_stopword_table}

---

##### `innodbLockWaitTimeout`<sup>Optional</sup> <a name="innodbLockWaitTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbLockWaitTimeout"></a>

```java
public java.lang.Number getInnodbLockWaitTimeout();
```

- *Type:* java.lang.Number

The length of time in seconds an InnoDB transaction waits for a row lock before giving up.

Default is 120.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#innodb_lock_wait_timeout ManagedDatabaseMysql#innodb_lock_wait_timeout}

---

##### `innodbLogBufferSize`<sup>Optional</sup> <a name="innodbLogBufferSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbLogBufferSize"></a>

```java
public java.lang.Number getInnodbLogBufferSize();
```

- *Type:* java.lang.Number

The size in bytes of the buffer that InnoDB uses to write to the log files on disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#innodb_log_buffer_size ManagedDatabaseMysql#innodb_log_buffer_size}

---

##### `innodbOnlineAlterLogMaxSize`<sup>Optional</sup> <a name="innodbOnlineAlterLogMaxSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbOnlineAlterLogMaxSize"></a>

```java
public java.lang.Number getInnodbOnlineAlterLogMaxSize();
```

- *Type:* java.lang.Number

The upper limit in bytes on the size of the temporary log files used during online DDL operations for InnoDB tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#innodb_online_alter_log_max_size ManagedDatabaseMysql#innodb_online_alter_log_max_size}

---

##### `innodbPrintAllDeadlocks`<sup>Optional</sup> <a name="innodbPrintAllDeadlocks" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbPrintAllDeadlocks"></a>

```java
public java.lang.Object getInnodbPrintAllDeadlocks();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled, information about all deadlocks in InnoDB user transactions is recorded in the error log. Disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#innodb_print_all_deadlocks ManagedDatabaseMysql#innodb_print_all_deadlocks}

---

##### `innodbReadIoThreads`<sup>Optional</sup> <a name="innodbReadIoThreads" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbReadIoThreads"></a>

```java
public java.lang.Number getInnodbReadIoThreads();
```

- *Type:* java.lang.Number

The number of I/O threads for read operations in InnoDB.

Default is 4. Changing this parameter will lead to a restart of the MySQL service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#innodb_read_io_threads ManagedDatabaseMysql#innodb_read_io_threads}

---

##### `innodbRollbackOnTimeout`<sup>Optional</sup> <a name="innodbRollbackOnTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbRollbackOnTimeout"></a>

```java
public java.lang.Object getInnodbRollbackOnTimeout();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled a transaction timeout causes InnoDB to abort and roll back the entire transaction.

Changing this parameter will lead to a restart of the MySQL service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#innodb_rollback_on_timeout ManagedDatabaseMysql#innodb_rollback_on_timeout}

---

##### `innodbThreadConcurrency`<sup>Optional</sup> <a name="innodbThreadConcurrency" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbThreadConcurrency"></a>

```java
public java.lang.Number getInnodbThreadConcurrency();
```

- *Type:* java.lang.Number

Defines the maximum number of threads permitted inside of InnoDB. Default is 0 (infinite concurrency - no limit).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#innodb_thread_concurrency ManagedDatabaseMysql#innodb_thread_concurrency}

---

##### `innodbWriteIoThreads`<sup>Optional</sup> <a name="innodbWriteIoThreads" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbWriteIoThreads"></a>

```java
public java.lang.Number getInnodbWriteIoThreads();
```

- *Type:* java.lang.Number

The number of I/O threads for write operations in InnoDB.

Default is 4. Changing this parameter will lead to a restart of the MySQL service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#innodb_write_io_threads ManagedDatabaseMysql#innodb_write_io_threads}

---

##### `interactiveTimeout`<sup>Optional</sup> <a name="interactiveTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.interactiveTimeout"></a>

```java
public java.lang.Number getInteractiveTimeout();
```

- *Type:* java.lang.Number

The number of seconds the server waits for activity on an interactive connection before closing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#interactive_timeout ManagedDatabaseMysql#interactive_timeout}

---

##### `internalTmpMemStorageEngine`<sup>Optional</sup> <a name="internalTmpMemStorageEngine" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.internalTmpMemStorageEngine"></a>

```java
public java.lang.String getInternalTmpMemStorageEngine();
```

- *Type:* java.lang.String

The storage engine for in-memory internal temporary tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#internal_tmp_mem_storage_engine ManagedDatabaseMysql#internal_tmp_mem_storage_engine}

---

##### `ipFilter`<sup>Optional</sup> <a name="ipFilter" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.ipFilter"></a>

```java
public java.util.List<java.lang.String> getIpFilter();
```

- *Type:* java.util.List<java.lang.String>

IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#ip_filter ManagedDatabaseMysql#ip_filter}

---

##### `logOutput`<sup>Optional</sup> <a name="logOutput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.logOutput"></a>

```java
public java.lang.String getLogOutput();
```

- *Type:* java.lang.String

The slow log output destination when slow_query_log is ON.

To enable MySQL AI Insights, choose INSIGHTS. To use MySQL AI Insights and the mysql.slow_log table at the same time, choose INSIGHTS,TABLE. To only use the mysql.slow_log table, choose TABLE. To silence slow logs, choose NONE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#log_output ManagedDatabaseMysql#log_output}

---

##### `longQueryTime`<sup>Optional</sup> <a name="longQueryTime" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.longQueryTime"></a>

```java
public java.lang.Number getLongQueryTime();
```

- *Type:* java.lang.Number

The slow_query_logs work as SQL statements that take more than long_query_time seconds to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#long_query_time ManagedDatabaseMysql#long_query_time}

---

##### `maxAllowedPacket`<sup>Optional</sup> <a name="maxAllowedPacket" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.maxAllowedPacket"></a>

```java
public java.lang.Number getMaxAllowedPacket();
```

- *Type:* java.lang.Number

Size of the largest message in bytes that can be received by the server. Default is 67108864 (64M).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#max_allowed_packet ManagedDatabaseMysql#max_allowed_packet}

---

##### `maxHeapTableSize`<sup>Optional</sup> <a name="maxHeapTableSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.maxHeapTableSize"></a>

```java
public java.lang.Number getMaxHeapTableSize();
```

- *Type:* java.lang.Number

Limits the size of internal in-memory tables. Also set tmp_table_size. Default is 16777216 (16M).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#max_heap_table_size ManagedDatabaseMysql#max_heap_table_size}

---

##### `migration`<sup>Optional</sup> <a name="migration" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.migration"></a>

```java
public ManagedDatabaseMysqlPropertiesMigration getMigration();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration">ManagedDatabaseMysqlPropertiesMigration</a>

migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#migration ManagedDatabaseMysql#migration}

---

##### `netBufferLength`<sup>Optional</sup> <a name="netBufferLength" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.netBufferLength"></a>

```java
public java.lang.Number getNetBufferLength();
```

- *Type:* java.lang.Number

Start sizes of connection buffer and result buffer.

Default is 16384 (16K). Changing this parameter will lead to a restart of the MySQL service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#net_buffer_length ManagedDatabaseMysql#net_buffer_length}

---

##### `netReadTimeout`<sup>Optional</sup> <a name="netReadTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.netReadTimeout"></a>

```java
public java.lang.Number getNetReadTimeout();
```

- *Type:* java.lang.Number

The number of seconds to wait for more data from a connection before aborting the read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#net_read_timeout ManagedDatabaseMysql#net_read_timeout}

---

##### `netWriteTimeout`<sup>Optional</sup> <a name="netWriteTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.netWriteTimeout"></a>

```java
public java.lang.Number getNetWriteTimeout();
```

- *Type:* java.lang.Number

The number of seconds to wait for a block to be written to a connection before aborting the write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#net_write_timeout ManagedDatabaseMysql#net_write_timeout}

---

##### `publicAccess`<sup>Optional</sup> <a name="publicAccess" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.publicAccess"></a>

```java
public java.lang.Object getPublicAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Public Access. Allow access to the service from the public Internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#public_access ManagedDatabaseMysql#public_access}

---

##### `serviceLog`<sup>Optional</sup> <a name="serviceLog" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.serviceLog"></a>

```java
public java.lang.Object getServiceLog();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Service logging. Store logs for the service so that they are available in the HTTP API and console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#service_log ManagedDatabaseMysql#service_log}

---

##### `slowQueryLog`<sup>Optional</sup> <a name="slowQueryLog" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.slowQueryLog"></a>

```java
public java.lang.Object getSlowQueryLog();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Slow query log enables capturing of slow queries. Setting slow_query_log to false also truncates the mysql.slow_log table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#slow_query_log ManagedDatabaseMysql#slow_query_log}

---

##### `sortBufferSize`<sup>Optional</sup> <a name="sortBufferSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.sortBufferSize"></a>

```java
public java.lang.Number getSortBufferSize();
```

- *Type:* java.lang.Number

Sort buffer size in bytes for ORDER BY optimization. Default is 262144 (256K).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#sort_buffer_size ManagedDatabaseMysql#sort_buffer_size}

---

##### `sqlMode`<sup>Optional</sup> <a name="sqlMode" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.sqlMode"></a>

```java
public java.lang.String getSqlMode();
```

- *Type:* java.lang.String

Global SQL mode.

Set to empty to use MySQL server defaults. When creating a new service and not setting this field Aiven default SQL mode (strict, SQL standard compliant) will be assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#sql_mode ManagedDatabaseMysql#sql_mode}

---

##### `sqlRequirePrimaryKey`<sup>Optional</sup> <a name="sqlRequirePrimaryKey" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.sqlRequirePrimaryKey"></a>

```java
public java.lang.Object getSqlRequirePrimaryKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Require primary key to be defined for new tables or old tables modified with ALTER TABLE and fail if missing.

It is recommended to always have primary keys because various functionality may break if any large table is missing them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#sql_require_primary_key ManagedDatabaseMysql#sql_require_primary_key}

---

##### `tmpTableSize`<sup>Optional</sup> <a name="tmpTableSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.tmpTableSize"></a>

```java
public java.lang.Number getTmpTableSize();
```

- *Type:* java.lang.Number

Limits the size of internal in-memory tables. Also set max_heap_table_size. Default is 16777216 (16M).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#tmp_table_size ManagedDatabaseMysql#tmp_table_size}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

MySQL major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#version ManagedDatabaseMysql#version}

---

##### `waitTimeout`<sup>Optional</sup> <a name="waitTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.waitTimeout"></a>

```java
public java.lang.Number getWaitTimeout();
```

- *Type:* java.lang.Number

The number of seconds the server waits for activity on a noninteractive connection before closing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#wait_timeout ManagedDatabaseMysql#wait_timeout}

---

### ManagedDatabaseMysqlPropertiesMigration <a name="ManagedDatabaseMysqlPropertiesMigration" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_mysql.ManagedDatabaseMysqlPropertiesMigration;

ManagedDatabaseMysqlPropertiesMigration.builder()
//  .dbname(java.lang.String)
//  .host(java.lang.String)
//  .ignoreDbs(java.lang.String)
//  .ignoreRoles(java.lang.String)
//  .method(java.lang.String)
//  .password(java.lang.String)
//  .port(java.lang.Number)
//  .ssl(java.lang.Boolean)
//  .ssl(IResolvable)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.dbname">dbname</a></code> | <code>java.lang.String</code> | Database name for bootstrapping the initial connection. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.host">host</a></code> | <code>java.lang.String</code> | Hostname or IP address of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.ignoreDbs">ignoreDbs</a></code> | <code>java.lang.String</code> | Comma-separated list of databases, which should be ignored during migration (supported by MySQL and PostgreSQL only at the moment). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.ignoreRoles">ignoreRoles</a></code> | <code>java.lang.String</code> | Comma-separated list of database roles, which should be ignored during migration (supported by PostgreSQL only at the moment). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.method">method</a></code> | <code>java.lang.String</code> | The migration method to be used (currently supported only by Redis, Dragonfly, MySQL and PostgreSQL service types). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.password">password</a></code> | <code>java.lang.String</code> | Password for authentication with the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.port">port</a></code> | <code>java.lang.Number</code> | Port number of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.ssl">ssl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The server where to migrate data from is secured with SSL. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.username">username</a></code> | <code>java.lang.String</code> | User name for authentication with the server where to migrate data from. |

---

##### `dbname`<sup>Optional</sup> <a name="dbname" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.dbname"></a>

```java
public java.lang.String getDbname();
```

- *Type:* java.lang.String

Database name for bootstrapping the initial connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#dbname ManagedDatabaseMysql#dbname}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Hostname or IP address of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#host ManagedDatabaseMysql#host}

---

##### `ignoreDbs`<sup>Optional</sup> <a name="ignoreDbs" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.ignoreDbs"></a>

```java
public java.lang.String getIgnoreDbs();
```

- *Type:* java.lang.String

Comma-separated list of databases, which should be ignored during migration (supported by MySQL and PostgreSQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#ignore_dbs ManagedDatabaseMysql#ignore_dbs}

---

##### `ignoreRoles`<sup>Optional</sup> <a name="ignoreRoles" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.ignoreRoles"></a>

```java
public java.lang.String getIgnoreRoles();
```

- *Type:* java.lang.String

Comma-separated list of database roles, which should be ignored during migration (supported by PostgreSQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#ignore_roles ManagedDatabaseMysql#ignore_roles}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

The migration method to be used (currently supported only by Redis, Dragonfly, MySQL and PostgreSQL service types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#method ManagedDatabaseMysql#method}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#password ManagedDatabaseMysql#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Port number of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#port ManagedDatabaseMysql#port}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.ssl"></a>

```java
public java.lang.Object getSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The server where to migrate data from is secured with SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#ssl ManagedDatabaseMysql#ssl}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

User name for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/resources/managed_database_mysql#username ManagedDatabaseMysql#username}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedDatabaseMysqlComponentsList <a name="ManagedDatabaseMysqlComponentsList" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_mysql.ManagedDatabaseMysqlComponentsList;

new ManagedDatabaseMysqlComponentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.get"></a>

```java
public ManagedDatabaseMysqlComponentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ManagedDatabaseMysqlComponentsOutputReference <a name="ManagedDatabaseMysqlComponentsOutputReference" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_mysql.ManagedDatabaseMysqlComponentsOutputReference;

new ManagedDatabaseMysqlComponentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.component">component</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.route">route</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.usage">usage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponents">ManagedDatabaseMysqlComponents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.component"></a>

```java
public java.lang.String getComponent();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.route"></a>

```java
public java.lang.String getRoute();
```

- *Type:* java.lang.String

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.usage"></a>

```java
public java.lang.String getUsage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.internalValue"></a>

```java
public ManagedDatabaseMysqlComponents getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponents">ManagedDatabaseMysqlComponents</a>

---


### ManagedDatabaseMysqlNetworkList <a name="ManagedDatabaseMysqlNetworkList" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_mysql.ManagedDatabaseMysqlNetworkList;

new ManagedDatabaseMysqlNetworkList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.get"></a>

```java
public ManagedDatabaseMysqlNetworkOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork">ManagedDatabaseMysqlNetwork</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork">ManagedDatabaseMysqlNetwork</a>>

---


### ManagedDatabaseMysqlNetworkOutputReference <a name="ManagedDatabaseMysqlNetworkOutputReference" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_mysql.ManagedDatabaseMysqlNetworkOutputReference;

new ManagedDatabaseMysqlNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.familyInput">familyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.uuidInput">uuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.family">family</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork">ManagedDatabaseMysqlNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `familyInput`<sup>Optional</sup> <a name="familyInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.familyInput"></a>

```java
public java.lang.String getFamilyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.uuidInput"></a>

```java
public java.lang.String getUuidInput();
```

- *Type:* java.lang.String

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork">ManagedDatabaseMysqlNetwork</a>

---


### ManagedDatabaseMysqlNodeStatesList <a name="ManagedDatabaseMysqlNodeStatesList" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_mysql.ManagedDatabaseMysqlNodeStatesList;

new ManagedDatabaseMysqlNodeStatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.get"></a>

```java
public ManagedDatabaseMysqlNodeStatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ManagedDatabaseMysqlNodeStatesOutputReference <a name="ManagedDatabaseMysqlNodeStatesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_mysql.ManagedDatabaseMysqlNodeStatesOutputReference;

new ManagedDatabaseMysqlNodeStatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStates">ManagedDatabaseMysqlNodeStates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.internalValue"></a>

```java
public ManagedDatabaseMysqlNodeStates getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStates">ManagedDatabaseMysqlNodeStates</a>

---


### ManagedDatabaseMysqlPropertiesMigrationOutputReference <a name="ManagedDatabaseMysqlPropertiesMigrationOutputReference" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_mysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference;

new ManagedDatabaseMysqlPropertiesMigrationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetDbname">resetDbname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetIgnoreDbs">resetIgnoreDbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetIgnoreRoles">resetIgnoreRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetSsl">resetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDbname` <a name="resetDbname" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetDbname"></a>

```java
public void resetDbname()
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetHost"></a>

```java
public void resetHost()
```

##### `resetIgnoreDbs` <a name="resetIgnoreDbs" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetIgnoreDbs"></a>

```java
public void resetIgnoreDbs()
```

##### `resetIgnoreRoles` <a name="resetIgnoreRoles" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetIgnoreRoles"></a>

```java
public void resetIgnoreRoles()
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetSsl` <a name="resetSsl" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetSsl"></a>

```java
public void resetSsl()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.dbnameInput">dbnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.ignoreDbsInput">ignoreDbsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.ignoreRolesInput">ignoreRolesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.sslInput">sslInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.dbname">dbname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.ignoreDbs">ignoreDbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.ignoreRoles">ignoreRoles</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.ssl">ssl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration">ManagedDatabaseMysqlPropertiesMigration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbnameInput`<sup>Optional</sup> <a name="dbnameInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.dbnameInput"></a>

```java
public java.lang.String getDbnameInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `ignoreDbsInput`<sup>Optional</sup> <a name="ignoreDbsInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.ignoreDbsInput"></a>

```java
public java.lang.String getIgnoreDbsInput();
```

- *Type:* java.lang.String

---

##### `ignoreRolesInput`<sup>Optional</sup> <a name="ignoreRolesInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.ignoreRolesInput"></a>

```java
public java.lang.String getIgnoreRolesInput();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `sslInput`<sup>Optional</sup> <a name="sslInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.sslInput"></a>

```java
public java.lang.Object getSslInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `dbname`<sup>Required</sup> <a name="dbname" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.dbname"></a>

```java
public java.lang.String getDbname();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `ignoreDbs`<sup>Required</sup> <a name="ignoreDbs" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.ignoreDbs"></a>

```java
public java.lang.String getIgnoreDbs();
```

- *Type:* java.lang.String

---

##### `ignoreRoles`<sup>Required</sup> <a name="ignoreRoles" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.ignoreRoles"></a>

```java
public java.lang.String getIgnoreRoles();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.ssl"></a>

```java
public java.lang.Object getSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.internalValue"></a>

```java
public ManagedDatabaseMysqlPropertiesMigration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration">ManagedDatabaseMysqlPropertiesMigration</a>

---


### ManagedDatabaseMysqlPropertiesOutputReference <a name="ManagedDatabaseMysqlPropertiesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_mysql.ManagedDatabaseMysqlPropertiesOutputReference;

new ManagedDatabaseMysqlPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.putMigration">putMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetAdminPassword">resetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetAdminUsername">resetAdminUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter">resetAutomaticUtilityNetworkIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetBackupHour">resetBackupHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetBackupMinute">resetBackupMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetBinlogRetentionPeriod">resetBinlogRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetConnectTimeout">resetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetDefaultTimeZone">resetDefaultTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetGroupConcatMaxLen">resetGroupConcatMaxLen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInformationSchemaStatsExpiry">resetInformationSchemaStatsExpiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbChangeBufferMaxSize">resetInnodbChangeBufferMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbFlushNeighbors">resetInnodbFlushNeighbors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbFtMinTokenSize">resetInnodbFtMinTokenSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbFtServerStopwordTable">resetInnodbFtServerStopwordTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbLockWaitTimeout">resetInnodbLockWaitTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbLogBufferSize">resetInnodbLogBufferSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbOnlineAlterLogMaxSize">resetInnodbOnlineAlterLogMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbPrintAllDeadlocks">resetInnodbPrintAllDeadlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbReadIoThreads">resetInnodbReadIoThreads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbRollbackOnTimeout">resetInnodbRollbackOnTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbThreadConcurrency">resetInnodbThreadConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbWriteIoThreads">resetInnodbWriteIoThreads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInteractiveTimeout">resetInteractiveTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInternalTmpMemStorageEngine">resetInternalTmpMemStorageEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetIpFilter">resetIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetLogOutput">resetLogOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetLongQueryTime">resetLongQueryTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetMaxAllowedPacket">resetMaxAllowedPacket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetMaxHeapTableSize">resetMaxHeapTableSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetMigration">resetMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetNetBufferLength">resetNetBufferLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetNetReadTimeout">resetNetReadTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetNetWriteTimeout">resetNetWriteTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetPublicAccess">resetPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetServiceLog">resetServiceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetSlowQueryLog">resetSlowQueryLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetSortBufferSize">resetSortBufferSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetSqlMode">resetSqlMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetSqlRequirePrimaryKey">resetSqlRequirePrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetTmpTableSize">resetTmpTableSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetVersion">resetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetWaitTimeout">resetWaitTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMigration` <a name="putMigration" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.putMigration"></a>

```java
public void putMigration(ManagedDatabaseMysqlPropertiesMigration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.putMigration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration">ManagedDatabaseMysqlPropertiesMigration</a>

---

##### `resetAdminPassword` <a name="resetAdminPassword" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetAdminPassword"></a>

```java
public void resetAdminPassword()
```

##### `resetAdminUsername` <a name="resetAdminUsername" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetAdminUsername"></a>

```java
public void resetAdminUsername()
```

##### `resetAutomaticUtilityNetworkIpFilter` <a name="resetAutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter"></a>

```java
public void resetAutomaticUtilityNetworkIpFilter()
```

##### `resetBackupHour` <a name="resetBackupHour" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetBackupHour"></a>

```java
public void resetBackupHour()
```

##### `resetBackupMinute` <a name="resetBackupMinute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetBackupMinute"></a>

```java
public void resetBackupMinute()
```

##### `resetBinlogRetentionPeriod` <a name="resetBinlogRetentionPeriod" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetBinlogRetentionPeriod"></a>

```java
public void resetBinlogRetentionPeriod()
```

##### `resetConnectTimeout` <a name="resetConnectTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetConnectTimeout"></a>

```java
public void resetConnectTimeout()
```

##### `resetDefaultTimeZone` <a name="resetDefaultTimeZone" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetDefaultTimeZone"></a>

```java
public void resetDefaultTimeZone()
```

##### `resetGroupConcatMaxLen` <a name="resetGroupConcatMaxLen" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetGroupConcatMaxLen"></a>

```java
public void resetGroupConcatMaxLen()
```

##### `resetInformationSchemaStatsExpiry` <a name="resetInformationSchemaStatsExpiry" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInformationSchemaStatsExpiry"></a>

```java
public void resetInformationSchemaStatsExpiry()
```

##### `resetInnodbChangeBufferMaxSize` <a name="resetInnodbChangeBufferMaxSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbChangeBufferMaxSize"></a>

```java
public void resetInnodbChangeBufferMaxSize()
```

##### `resetInnodbFlushNeighbors` <a name="resetInnodbFlushNeighbors" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbFlushNeighbors"></a>

```java
public void resetInnodbFlushNeighbors()
```

##### `resetInnodbFtMinTokenSize` <a name="resetInnodbFtMinTokenSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbFtMinTokenSize"></a>

```java
public void resetInnodbFtMinTokenSize()
```

##### `resetInnodbFtServerStopwordTable` <a name="resetInnodbFtServerStopwordTable" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbFtServerStopwordTable"></a>

```java
public void resetInnodbFtServerStopwordTable()
```

##### `resetInnodbLockWaitTimeout` <a name="resetInnodbLockWaitTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbLockWaitTimeout"></a>

```java
public void resetInnodbLockWaitTimeout()
```

##### `resetInnodbLogBufferSize` <a name="resetInnodbLogBufferSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbLogBufferSize"></a>

```java
public void resetInnodbLogBufferSize()
```

##### `resetInnodbOnlineAlterLogMaxSize` <a name="resetInnodbOnlineAlterLogMaxSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbOnlineAlterLogMaxSize"></a>

```java
public void resetInnodbOnlineAlterLogMaxSize()
```

##### `resetInnodbPrintAllDeadlocks` <a name="resetInnodbPrintAllDeadlocks" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbPrintAllDeadlocks"></a>

```java
public void resetInnodbPrintAllDeadlocks()
```

##### `resetInnodbReadIoThreads` <a name="resetInnodbReadIoThreads" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbReadIoThreads"></a>

```java
public void resetInnodbReadIoThreads()
```

##### `resetInnodbRollbackOnTimeout` <a name="resetInnodbRollbackOnTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbRollbackOnTimeout"></a>

```java
public void resetInnodbRollbackOnTimeout()
```

##### `resetInnodbThreadConcurrency` <a name="resetInnodbThreadConcurrency" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbThreadConcurrency"></a>

```java
public void resetInnodbThreadConcurrency()
```

##### `resetInnodbWriteIoThreads` <a name="resetInnodbWriteIoThreads" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbWriteIoThreads"></a>

```java
public void resetInnodbWriteIoThreads()
```

##### `resetInteractiveTimeout` <a name="resetInteractiveTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInteractiveTimeout"></a>

```java
public void resetInteractiveTimeout()
```

##### `resetInternalTmpMemStorageEngine` <a name="resetInternalTmpMemStorageEngine" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInternalTmpMemStorageEngine"></a>

```java
public void resetInternalTmpMemStorageEngine()
```

##### `resetIpFilter` <a name="resetIpFilter" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetIpFilter"></a>

```java
public void resetIpFilter()
```

##### `resetLogOutput` <a name="resetLogOutput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetLogOutput"></a>

```java
public void resetLogOutput()
```

##### `resetLongQueryTime` <a name="resetLongQueryTime" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetLongQueryTime"></a>

```java
public void resetLongQueryTime()
```

##### `resetMaxAllowedPacket` <a name="resetMaxAllowedPacket" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetMaxAllowedPacket"></a>

```java
public void resetMaxAllowedPacket()
```

##### `resetMaxHeapTableSize` <a name="resetMaxHeapTableSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetMaxHeapTableSize"></a>

```java
public void resetMaxHeapTableSize()
```

##### `resetMigration` <a name="resetMigration" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetMigration"></a>

```java
public void resetMigration()
```

##### `resetNetBufferLength` <a name="resetNetBufferLength" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetNetBufferLength"></a>

```java
public void resetNetBufferLength()
```

##### `resetNetReadTimeout` <a name="resetNetReadTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetNetReadTimeout"></a>

```java
public void resetNetReadTimeout()
```

##### `resetNetWriteTimeout` <a name="resetNetWriteTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetNetWriteTimeout"></a>

```java
public void resetNetWriteTimeout()
```

##### `resetPublicAccess` <a name="resetPublicAccess" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetPublicAccess"></a>

```java
public void resetPublicAccess()
```

##### `resetServiceLog` <a name="resetServiceLog" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetServiceLog"></a>

```java
public void resetServiceLog()
```

##### `resetSlowQueryLog` <a name="resetSlowQueryLog" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetSlowQueryLog"></a>

```java
public void resetSlowQueryLog()
```

##### `resetSortBufferSize` <a name="resetSortBufferSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetSortBufferSize"></a>

```java
public void resetSortBufferSize()
```

##### `resetSqlMode` <a name="resetSqlMode" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetSqlMode"></a>

```java
public void resetSqlMode()
```

##### `resetSqlRequirePrimaryKey` <a name="resetSqlRequirePrimaryKey" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetSqlRequirePrimaryKey"></a>

```java
public void resetSqlRequirePrimaryKey()
```

##### `resetTmpTableSize` <a name="resetTmpTableSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetTmpTableSize"></a>

```java
public void resetTmpTableSize()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetVersion"></a>

```java
public void resetVersion()
```

##### `resetWaitTimeout` <a name="resetWaitTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetWaitTimeout"></a>

```java
public void resetWaitTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.migration">migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference">ManagedDatabaseMysqlPropertiesMigrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.adminPasswordInput">adminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.adminUsernameInput">adminUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput">automaticUtilityNetworkIpFilterInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.backupHourInput">backupHourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.backupMinuteInput">backupMinuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.binlogRetentionPeriodInput">binlogRetentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.connectTimeoutInput">connectTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.defaultTimeZoneInput">defaultTimeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.groupConcatMaxLenInput">groupConcatMaxLenInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.informationSchemaStatsExpiryInput">informationSchemaStatsExpiryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbChangeBufferMaxSizeInput">innodbChangeBufferMaxSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFlushNeighborsInput">innodbFlushNeighborsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFtMinTokenSizeInput">innodbFtMinTokenSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFtServerStopwordTableInput">innodbFtServerStopwordTableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbLockWaitTimeoutInput">innodbLockWaitTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbLogBufferSizeInput">innodbLogBufferSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbOnlineAlterLogMaxSizeInput">innodbOnlineAlterLogMaxSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbPrintAllDeadlocksInput">innodbPrintAllDeadlocksInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbReadIoThreadsInput">innodbReadIoThreadsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbRollbackOnTimeoutInput">innodbRollbackOnTimeoutInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbThreadConcurrencyInput">innodbThreadConcurrencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbWriteIoThreadsInput">innodbWriteIoThreadsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.interactiveTimeoutInput">interactiveTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.internalTmpMemStorageEngineInput">internalTmpMemStorageEngineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.ipFilterInput">ipFilterInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.logOutputInput">logOutputInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.longQueryTimeInput">longQueryTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.maxAllowedPacketInput">maxAllowedPacketInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.maxHeapTableSizeInput">maxHeapTableSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.migrationInput">migrationInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration">ManagedDatabaseMysqlPropertiesMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netBufferLengthInput">netBufferLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netReadTimeoutInput">netReadTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netWriteTimeoutInput">netWriteTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.publicAccessInput">publicAccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.serviceLogInput">serviceLogInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.slowQueryLogInput">slowQueryLogInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sortBufferSizeInput">sortBufferSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sqlModeInput">sqlModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sqlRequirePrimaryKeyInput">sqlRequirePrimaryKeyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.tmpTableSizeInput">tmpTableSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.waitTimeoutInput">waitTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilter">automaticUtilityNetworkIpFilter</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.backupHour">backupHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.backupMinute">backupMinute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.binlogRetentionPeriod">binlogRetentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.connectTimeout">connectTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.defaultTimeZone">defaultTimeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.groupConcatMaxLen">groupConcatMaxLen</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.informationSchemaStatsExpiry">informationSchemaStatsExpiry</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbChangeBufferMaxSize">innodbChangeBufferMaxSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFlushNeighbors">innodbFlushNeighbors</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFtMinTokenSize">innodbFtMinTokenSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFtServerStopwordTable">innodbFtServerStopwordTable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbLockWaitTimeout">innodbLockWaitTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbLogBufferSize">innodbLogBufferSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbOnlineAlterLogMaxSize">innodbOnlineAlterLogMaxSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbPrintAllDeadlocks">innodbPrintAllDeadlocks</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbReadIoThreads">innodbReadIoThreads</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbRollbackOnTimeout">innodbRollbackOnTimeout</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbThreadConcurrency">innodbThreadConcurrency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbWriteIoThreads">innodbWriteIoThreads</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.interactiveTimeout">interactiveTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.internalTmpMemStorageEngine">internalTmpMemStorageEngine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.ipFilter">ipFilter</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.logOutput">logOutput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.longQueryTime">longQueryTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.maxAllowedPacket">maxAllowedPacket</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.maxHeapTableSize">maxHeapTableSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netBufferLength">netBufferLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netReadTimeout">netReadTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netWriteTimeout">netWriteTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.publicAccess">publicAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.serviceLog">serviceLog</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.slowQueryLog">slowQueryLog</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sortBufferSize">sortBufferSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sqlMode">sqlMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sqlRequirePrimaryKey">sqlRequirePrimaryKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.tmpTableSize">tmpTableSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.waitTimeout">waitTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties">ManagedDatabaseMysqlProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `migration`<sup>Required</sup> <a name="migration" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.migration"></a>

```java
public ManagedDatabaseMysqlPropertiesMigrationOutputReference getMigration();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference">ManagedDatabaseMysqlPropertiesMigrationOutputReference</a>

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.adminPasswordInput"></a>

```java
public java.lang.String getAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `adminUsernameInput`<sup>Optional</sup> <a name="adminUsernameInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.adminUsernameInput"></a>

```java
public java.lang.String getAdminUsernameInput();
```

- *Type:* java.lang.String

---

##### `automaticUtilityNetworkIpFilterInput`<sup>Optional</sup> <a name="automaticUtilityNetworkIpFilterInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput"></a>

```java
public java.lang.Object getAutomaticUtilityNetworkIpFilterInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backupHourInput`<sup>Optional</sup> <a name="backupHourInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.backupHourInput"></a>

```java
public java.lang.Number getBackupHourInput();
```

- *Type:* java.lang.Number

---

##### `backupMinuteInput`<sup>Optional</sup> <a name="backupMinuteInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.backupMinuteInput"></a>

```java
public java.lang.Number getBackupMinuteInput();
```

- *Type:* java.lang.Number

---

##### `binlogRetentionPeriodInput`<sup>Optional</sup> <a name="binlogRetentionPeriodInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.binlogRetentionPeriodInput"></a>

```java
public java.lang.Number getBinlogRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `connectTimeoutInput`<sup>Optional</sup> <a name="connectTimeoutInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.connectTimeoutInput"></a>

```java
public java.lang.Number getConnectTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `defaultTimeZoneInput`<sup>Optional</sup> <a name="defaultTimeZoneInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.defaultTimeZoneInput"></a>

```java
public java.lang.String getDefaultTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `groupConcatMaxLenInput`<sup>Optional</sup> <a name="groupConcatMaxLenInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.groupConcatMaxLenInput"></a>

```java
public java.lang.Number getGroupConcatMaxLenInput();
```

- *Type:* java.lang.Number

---

##### `informationSchemaStatsExpiryInput`<sup>Optional</sup> <a name="informationSchemaStatsExpiryInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.informationSchemaStatsExpiryInput"></a>

```java
public java.lang.Number getInformationSchemaStatsExpiryInput();
```

- *Type:* java.lang.Number

---

##### `innodbChangeBufferMaxSizeInput`<sup>Optional</sup> <a name="innodbChangeBufferMaxSizeInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbChangeBufferMaxSizeInput"></a>

```java
public java.lang.Number getInnodbChangeBufferMaxSizeInput();
```

- *Type:* java.lang.Number

---

##### `innodbFlushNeighborsInput`<sup>Optional</sup> <a name="innodbFlushNeighborsInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFlushNeighborsInput"></a>

```java
public java.lang.Number getInnodbFlushNeighborsInput();
```

- *Type:* java.lang.Number

---

##### `innodbFtMinTokenSizeInput`<sup>Optional</sup> <a name="innodbFtMinTokenSizeInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFtMinTokenSizeInput"></a>

```java
public java.lang.Number getInnodbFtMinTokenSizeInput();
```

- *Type:* java.lang.Number

---

##### `innodbFtServerStopwordTableInput`<sup>Optional</sup> <a name="innodbFtServerStopwordTableInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFtServerStopwordTableInput"></a>

```java
public java.lang.String getInnodbFtServerStopwordTableInput();
```

- *Type:* java.lang.String

---

##### `innodbLockWaitTimeoutInput`<sup>Optional</sup> <a name="innodbLockWaitTimeoutInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbLockWaitTimeoutInput"></a>

```java
public java.lang.Number getInnodbLockWaitTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `innodbLogBufferSizeInput`<sup>Optional</sup> <a name="innodbLogBufferSizeInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbLogBufferSizeInput"></a>

```java
public java.lang.Number getInnodbLogBufferSizeInput();
```

- *Type:* java.lang.Number

---

##### `innodbOnlineAlterLogMaxSizeInput`<sup>Optional</sup> <a name="innodbOnlineAlterLogMaxSizeInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbOnlineAlterLogMaxSizeInput"></a>

```java
public java.lang.Number getInnodbOnlineAlterLogMaxSizeInput();
```

- *Type:* java.lang.Number

---

##### `innodbPrintAllDeadlocksInput`<sup>Optional</sup> <a name="innodbPrintAllDeadlocksInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbPrintAllDeadlocksInput"></a>

```java
public java.lang.Object getInnodbPrintAllDeadlocksInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `innodbReadIoThreadsInput`<sup>Optional</sup> <a name="innodbReadIoThreadsInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbReadIoThreadsInput"></a>

```java
public java.lang.Number getInnodbReadIoThreadsInput();
```

- *Type:* java.lang.Number

---

##### `innodbRollbackOnTimeoutInput`<sup>Optional</sup> <a name="innodbRollbackOnTimeoutInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbRollbackOnTimeoutInput"></a>

```java
public java.lang.Object getInnodbRollbackOnTimeoutInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `innodbThreadConcurrencyInput`<sup>Optional</sup> <a name="innodbThreadConcurrencyInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbThreadConcurrencyInput"></a>

```java
public java.lang.Number getInnodbThreadConcurrencyInput();
```

- *Type:* java.lang.Number

---

##### `innodbWriteIoThreadsInput`<sup>Optional</sup> <a name="innodbWriteIoThreadsInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbWriteIoThreadsInput"></a>

```java
public java.lang.Number getInnodbWriteIoThreadsInput();
```

- *Type:* java.lang.Number

---

##### `interactiveTimeoutInput`<sup>Optional</sup> <a name="interactiveTimeoutInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.interactiveTimeoutInput"></a>

```java
public java.lang.Number getInteractiveTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `internalTmpMemStorageEngineInput`<sup>Optional</sup> <a name="internalTmpMemStorageEngineInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.internalTmpMemStorageEngineInput"></a>

```java
public java.lang.String getInternalTmpMemStorageEngineInput();
```

- *Type:* java.lang.String

---

##### `ipFilterInput`<sup>Optional</sup> <a name="ipFilterInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.ipFilterInput"></a>

```java
public java.util.List<java.lang.String> getIpFilterInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `logOutputInput`<sup>Optional</sup> <a name="logOutputInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.logOutputInput"></a>

```java
public java.lang.String getLogOutputInput();
```

- *Type:* java.lang.String

---

##### `longQueryTimeInput`<sup>Optional</sup> <a name="longQueryTimeInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.longQueryTimeInput"></a>

```java
public java.lang.Number getLongQueryTimeInput();
```

- *Type:* java.lang.Number

---

##### `maxAllowedPacketInput`<sup>Optional</sup> <a name="maxAllowedPacketInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.maxAllowedPacketInput"></a>

```java
public java.lang.Number getMaxAllowedPacketInput();
```

- *Type:* java.lang.Number

---

##### `maxHeapTableSizeInput`<sup>Optional</sup> <a name="maxHeapTableSizeInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.maxHeapTableSizeInput"></a>

```java
public java.lang.Number getMaxHeapTableSizeInput();
```

- *Type:* java.lang.Number

---

##### `migrationInput`<sup>Optional</sup> <a name="migrationInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.migrationInput"></a>

```java
public ManagedDatabaseMysqlPropertiesMigration getMigrationInput();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration">ManagedDatabaseMysqlPropertiesMigration</a>

---

##### `netBufferLengthInput`<sup>Optional</sup> <a name="netBufferLengthInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netBufferLengthInput"></a>

```java
public java.lang.Number getNetBufferLengthInput();
```

- *Type:* java.lang.Number

---

##### `netReadTimeoutInput`<sup>Optional</sup> <a name="netReadTimeoutInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netReadTimeoutInput"></a>

```java
public java.lang.Number getNetReadTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `netWriteTimeoutInput`<sup>Optional</sup> <a name="netWriteTimeoutInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netWriteTimeoutInput"></a>

```java
public java.lang.Number getNetWriteTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `publicAccessInput`<sup>Optional</sup> <a name="publicAccessInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.publicAccessInput"></a>

```java
public java.lang.Object getPublicAccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceLogInput`<sup>Optional</sup> <a name="serviceLogInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.serviceLogInput"></a>

```java
public java.lang.Object getServiceLogInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `slowQueryLogInput`<sup>Optional</sup> <a name="slowQueryLogInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.slowQueryLogInput"></a>

```java
public java.lang.Object getSlowQueryLogInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sortBufferSizeInput`<sup>Optional</sup> <a name="sortBufferSizeInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sortBufferSizeInput"></a>

```java
public java.lang.Number getSortBufferSizeInput();
```

- *Type:* java.lang.Number

---

##### `sqlModeInput`<sup>Optional</sup> <a name="sqlModeInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sqlModeInput"></a>

```java
public java.lang.String getSqlModeInput();
```

- *Type:* java.lang.String

---

##### `sqlRequirePrimaryKeyInput`<sup>Optional</sup> <a name="sqlRequirePrimaryKeyInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sqlRequirePrimaryKeyInput"></a>

```java
public java.lang.Object getSqlRequirePrimaryKeyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tmpTableSizeInput`<sup>Optional</sup> <a name="tmpTableSizeInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.tmpTableSizeInput"></a>

```java
public java.lang.Number getTmpTableSizeInput();
```

- *Type:* java.lang.Number

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `waitTimeoutInput`<sup>Optional</sup> <a name="waitTimeoutInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.waitTimeoutInput"></a>

```java
public java.lang.Number getWaitTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

---

##### `automaticUtilityNetworkIpFilter`<sup>Required</sup> <a name="automaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilter"></a>

```java
public java.lang.Object getAutomaticUtilityNetworkIpFilter();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backupHour`<sup>Required</sup> <a name="backupHour" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.backupHour"></a>

```java
public java.lang.Number getBackupHour();
```

- *Type:* java.lang.Number

---

##### `backupMinute`<sup>Required</sup> <a name="backupMinute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.backupMinute"></a>

```java
public java.lang.Number getBackupMinute();
```

- *Type:* java.lang.Number

---

##### `binlogRetentionPeriod`<sup>Required</sup> <a name="binlogRetentionPeriod" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.binlogRetentionPeriod"></a>

```java
public java.lang.Number getBinlogRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `connectTimeout`<sup>Required</sup> <a name="connectTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.connectTimeout"></a>

```java
public java.lang.Number getConnectTimeout();
```

- *Type:* java.lang.Number

---

##### `defaultTimeZone`<sup>Required</sup> <a name="defaultTimeZone" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.defaultTimeZone"></a>

```java
public java.lang.String getDefaultTimeZone();
```

- *Type:* java.lang.String

---

##### `groupConcatMaxLen`<sup>Required</sup> <a name="groupConcatMaxLen" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.groupConcatMaxLen"></a>

```java
public java.lang.Number getGroupConcatMaxLen();
```

- *Type:* java.lang.Number

---

##### `informationSchemaStatsExpiry`<sup>Required</sup> <a name="informationSchemaStatsExpiry" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.informationSchemaStatsExpiry"></a>

```java
public java.lang.Number getInformationSchemaStatsExpiry();
```

- *Type:* java.lang.Number

---

##### `innodbChangeBufferMaxSize`<sup>Required</sup> <a name="innodbChangeBufferMaxSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbChangeBufferMaxSize"></a>

```java
public java.lang.Number getInnodbChangeBufferMaxSize();
```

- *Type:* java.lang.Number

---

##### `innodbFlushNeighbors`<sup>Required</sup> <a name="innodbFlushNeighbors" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFlushNeighbors"></a>

```java
public java.lang.Number getInnodbFlushNeighbors();
```

- *Type:* java.lang.Number

---

##### `innodbFtMinTokenSize`<sup>Required</sup> <a name="innodbFtMinTokenSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFtMinTokenSize"></a>

```java
public java.lang.Number getInnodbFtMinTokenSize();
```

- *Type:* java.lang.Number

---

##### `innodbFtServerStopwordTable`<sup>Required</sup> <a name="innodbFtServerStopwordTable" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFtServerStopwordTable"></a>

```java
public java.lang.String getInnodbFtServerStopwordTable();
```

- *Type:* java.lang.String

---

##### `innodbLockWaitTimeout`<sup>Required</sup> <a name="innodbLockWaitTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbLockWaitTimeout"></a>

```java
public java.lang.Number getInnodbLockWaitTimeout();
```

- *Type:* java.lang.Number

---

##### `innodbLogBufferSize`<sup>Required</sup> <a name="innodbLogBufferSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbLogBufferSize"></a>

```java
public java.lang.Number getInnodbLogBufferSize();
```

- *Type:* java.lang.Number

---

##### `innodbOnlineAlterLogMaxSize`<sup>Required</sup> <a name="innodbOnlineAlterLogMaxSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbOnlineAlterLogMaxSize"></a>

```java
public java.lang.Number getInnodbOnlineAlterLogMaxSize();
```

- *Type:* java.lang.Number

---

##### `innodbPrintAllDeadlocks`<sup>Required</sup> <a name="innodbPrintAllDeadlocks" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbPrintAllDeadlocks"></a>

```java
public java.lang.Object getInnodbPrintAllDeadlocks();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `innodbReadIoThreads`<sup>Required</sup> <a name="innodbReadIoThreads" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbReadIoThreads"></a>

```java
public java.lang.Number getInnodbReadIoThreads();
```

- *Type:* java.lang.Number

---

##### `innodbRollbackOnTimeout`<sup>Required</sup> <a name="innodbRollbackOnTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbRollbackOnTimeout"></a>

```java
public java.lang.Object getInnodbRollbackOnTimeout();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `innodbThreadConcurrency`<sup>Required</sup> <a name="innodbThreadConcurrency" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbThreadConcurrency"></a>

```java
public java.lang.Number getInnodbThreadConcurrency();
```

- *Type:* java.lang.Number

---

##### `innodbWriteIoThreads`<sup>Required</sup> <a name="innodbWriteIoThreads" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbWriteIoThreads"></a>

```java
public java.lang.Number getInnodbWriteIoThreads();
```

- *Type:* java.lang.Number

---

##### `interactiveTimeout`<sup>Required</sup> <a name="interactiveTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.interactiveTimeout"></a>

```java
public java.lang.Number getInteractiveTimeout();
```

- *Type:* java.lang.Number

---

##### `internalTmpMemStorageEngine`<sup>Required</sup> <a name="internalTmpMemStorageEngine" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.internalTmpMemStorageEngine"></a>

```java
public java.lang.String getInternalTmpMemStorageEngine();
```

- *Type:* java.lang.String

---

##### `ipFilter`<sup>Required</sup> <a name="ipFilter" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.ipFilter"></a>

```java
public java.util.List<java.lang.String> getIpFilter();
```

- *Type:* java.util.List<java.lang.String>

---

##### `logOutput`<sup>Required</sup> <a name="logOutput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.logOutput"></a>

```java
public java.lang.String getLogOutput();
```

- *Type:* java.lang.String

---

##### `longQueryTime`<sup>Required</sup> <a name="longQueryTime" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.longQueryTime"></a>

```java
public java.lang.Number getLongQueryTime();
```

- *Type:* java.lang.Number

---

##### `maxAllowedPacket`<sup>Required</sup> <a name="maxAllowedPacket" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.maxAllowedPacket"></a>

```java
public java.lang.Number getMaxAllowedPacket();
```

- *Type:* java.lang.Number

---

##### `maxHeapTableSize`<sup>Required</sup> <a name="maxHeapTableSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.maxHeapTableSize"></a>

```java
public java.lang.Number getMaxHeapTableSize();
```

- *Type:* java.lang.Number

---

##### `netBufferLength`<sup>Required</sup> <a name="netBufferLength" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netBufferLength"></a>

```java
public java.lang.Number getNetBufferLength();
```

- *Type:* java.lang.Number

---

##### `netReadTimeout`<sup>Required</sup> <a name="netReadTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netReadTimeout"></a>

```java
public java.lang.Number getNetReadTimeout();
```

- *Type:* java.lang.Number

---

##### `netWriteTimeout`<sup>Required</sup> <a name="netWriteTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netWriteTimeout"></a>

```java
public java.lang.Number getNetWriteTimeout();
```

- *Type:* java.lang.Number

---

##### `publicAccess`<sup>Required</sup> <a name="publicAccess" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.publicAccess"></a>

```java
public java.lang.Object getPublicAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceLog`<sup>Required</sup> <a name="serviceLog" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.serviceLog"></a>

```java
public java.lang.Object getServiceLog();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `slowQueryLog`<sup>Required</sup> <a name="slowQueryLog" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.slowQueryLog"></a>

```java
public java.lang.Object getSlowQueryLog();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sortBufferSize`<sup>Required</sup> <a name="sortBufferSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sortBufferSize"></a>

```java
public java.lang.Number getSortBufferSize();
```

- *Type:* java.lang.Number

---

##### `sqlMode`<sup>Required</sup> <a name="sqlMode" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sqlMode"></a>

```java
public java.lang.String getSqlMode();
```

- *Type:* java.lang.String

---

##### `sqlRequirePrimaryKey`<sup>Required</sup> <a name="sqlRequirePrimaryKey" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sqlRequirePrimaryKey"></a>

```java
public java.lang.Object getSqlRequirePrimaryKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tmpTableSize`<sup>Required</sup> <a name="tmpTableSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.tmpTableSize"></a>

```java
public java.lang.Number getTmpTableSize();
```

- *Type:* java.lang.Number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `waitTimeout`<sup>Required</sup> <a name="waitTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.waitTimeout"></a>

```java
public java.lang.Number getWaitTimeout();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.internalValue"></a>

```java
public ManagedDatabaseMysqlProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties">ManagedDatabaseMysqlProperties</a>

---



