# `managedDatabaseRedis` Submodule <a name="`managedDatabaseRedis` Submodule" id="@cdktf/provider-upcloud.managedDatabaseRedis"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDatabaseRedis <a name="ManagedDatabaseRedis" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis upcloud_managed_database_redis}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_redis.ManagedDatabaseRedis;

ManagedDatabaseRedis.Builder.create(Construct scope, java.lang.String id)
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
//  .network(java.util.List<ManagedDatabaseRedisNetwork>)
//  .powered(java.lang.Boolean)
//  .powered(IResolvable)
//  .properties(ManagedDatabaseRedisProperties)
//  .terminationProtection(java.lang.Boolean)
//  .terminationProtection(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.plan">plan</a></code> | <code>java.lang.String</code> | Service plan to use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | Title of a managed database instance. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#id ManagedDatabaseRedis#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User defined key-value pairs to classify the managed database. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.maintenanceWindowDow">maintenanceWindowDow</a></code> | <code>java.lang.String</code> | Maintenance window day of week. Lower case weekday name (monday, tuesday, ...). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.maintenanceWindowTime">maintenanceWindowTime</a></code> | <code>java.lang.String</code> | Maintenance window UTC time in hh:mm:ss format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.network">network</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetwork">ManagedDatabaseRedisNetwork</a>></code> | network block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.powered">powered</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The administrative power state of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties">ManagedDatabaseRedisProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.terminationProtection">terminationProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, prevents the managed service from being powered off, or deleted. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the service.

The name is used as a prefix for the logical hostname. Must be unique within an account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#name ManagedDatabaseRedis#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.plan"></a>

- *Type:* java.lang.String

Service plan to use.

This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#plan ManagedDatabaseRedis#plan}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.title"></a>

- *Type:* java.lang.String

Title of a managed database instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#title ManagedDatabaseRedis#title}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#zone ManagedDatabaseRedis#zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#id ManagedDatabaseRedis#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User defined key-value pairs to classify the managed database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#labels ManagedDatabaseRedis#labels}

---

##### `maintenanceWindowDow`<sup>Optional</sup> <a name="maintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.maintenanceWindowDow"></a>

- *Type:* java.lang.String

Maintenance window day of week. Lower case weekday name (monday, tuesday, ...).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#maintenance_window_dow ManagedDatabaseRedis#maintenance_window_dow}

---

##### `maintenanceWindowTime`<sup>Optional</sup> <a name="maintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.maintenanceWindowTime"></a>

- *Type:* java.lang.String

Maintenance window UTC time in hh:mm:ss format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#maintenance_window_time ManagedDatabaseRedis#maintenance_window_time}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.network"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetwork">ManagedDatabaseRedisNetwork</a>>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#network ManagedDatabaseRedis#network}

---

##### `powered`<sup>Optional</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.powered"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The administrative power state of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#powered ManagedDatabaseRedis#powered}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties">ManagedDatabaseRedisProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#properties ManagedDatabaseRedis#properties}

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.terminationProtection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, prevents the managed service from being powered off, or deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#termination_protection ManagedDatabaseRedis#termination_protection}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetMaintenanceWindowDow">resetMaintenanceWindowDow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetMaintenanceWindowTime">resetMaintenanceWindowTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetPowered">resetPowered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetTerminationProtection">resetTerminationProtection</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.putNetwork"></a>

```java
public void putNetwork(IResolvable OR java.util.List<ManagedDatabaseRedisNetwork> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.putNetwork.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetwork">ManagedDatabaseRedisNetwork</a>>

---

##### `putProperties` <a name="putProperties" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.putProperties"></a>

```java
public void putProperties(ManagedDatabaseRedisProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties">ManagedDatabaseRedisProperties</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMaintenanceWindowDow` <a name="resetMaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetMaintenanceWindowDow"></a>

```java
public void resetMaintenanceWindowDow()
```

##### `resetMaintenanceWindowTime` <a name="resetMaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetMaintenanceWindowTime"></a>

```java
public void resetMaintenanceWindowTime()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetPowered` <a name="resetPowered" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetPowered"></a>

```java
public void resetPowered()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetTerminationProtection` <a name="resetTerminationProtection" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetTerminationProtection"></a>

```java
public void resetTerminationProtection()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedDatabaseRedis resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_redis.ManagedDatabaseRedis;

ManagedDatabaseRedis.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_redis.ManagedDatabaseRedis;

ManagedDatabaseRedis.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_redis.ManagedDatabaseRedis;

ManagedDatabaseRedis.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_redis.ManagedDatabaseRedis;

ManagedDatabaseRedis.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ManagedDatabaseRedis.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ManagedDatabaseRedis resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ManagedDatabaseRedis to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ManagedDatabaseRedis that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ManagedDatabaseRedis to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.components">components</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList">ManagedDatabaseRedisComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.network">network</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkList">ManagedDatabaseRedisNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.nodeStates">nodeStates</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList">ManagedDatabaseRedisNodeStatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.primaryDatabase">primaryDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference">ManagedDatabaseRedisPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.serviceHost">serviceHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.servicePassword">servicePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.servicePort">servicePort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.serviceUri">serviceUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.serviceUsername">serviceUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.maintenanceWindowDowInput">maintenanceWindowDowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.maintenanceWindowTimeInput">maintenanceWindowTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.networkInput">networkInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetwork">ManagedDatabaseRedisNetwork</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.planInput">planInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.poweredInput">poweredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties">ManagedDatabaseRedisProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.terminationProtectionInput">terminationProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.maintenanceWindowDow">maintenanceWindowDow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.maintenanceWindowTime">maintenanceWindowTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.plan">plan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.powered">powered</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.terminationProtection">terminationProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.components"></a>

```java
public ManagedDatabaseRedisComponentsList getComponents();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList">ManagedDatabaseRedisComponentsList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.network"></a>

```java
public ManagedDatabaseRedisNetworkList getNetwork();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkList">ManagedDatabaseRedisNetworkList</a>

---

##### `nodeStates`<sup>Required</sup> <a name="nodeStates" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.nodeStates"></a>

```java
public ManagedDatabaseRedisNodeStatesList getNodeStates();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList">ManagedDatabaseRedisNodeStatesList</a>

---

##### `primaryDatabase`<sup>Required</sup> <a name="primaryDatabase" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.primaryDatabase"></a>

```java
public java.lang.String getPrimaryDatabase();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.properties"></a>

```java
public ManagedDatabaseRedisPropertiesOutputReference getProperties();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference">ManagedDatabaseRedisPropertiesOutputReference</a>

---

##### `serviceHost`<sup>Required</sup> <a name="serviceHost" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.serviceHost"></a>

```java
public java.lang.String getServiceHost();
```

- *Type:* java.lang.String

---

##### `servicePassword`<sup>Required</sup> <a name="servicePassword" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.servicePassword"></a>

```java
public java.lang.String getServicePassword();
```

- *Type:* java.lang.String

---

##### `servicePort`<sup>Required</sup> <a name="servicePort" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.servicePort"></a>

```java
public java.lang.String getServicePort();
```

- *Type:* java.lang.String

---

##### `serviceUri`<sup>Required</sup> <a name="serviceUri" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.serviceUri"></a>

```java
public java.lang.String getServiceUri();
```

- *Type:* java.lang.String

---

##### `serviceUsername`<sup>Required</sup> <a name="serviceUsername" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.serviceUsername"></a>

```java
public java.lang.String getServiceUsername();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `maintenanceWindowDowInput`<sup>Optional</sup> <a name="maintenanceWindowDowInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.maintenanceWindowDowInput"></a>

```java
public java.lang.String getMaintenanceWindowDowInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowTimeInput`<sup>Optional</sup> <a name="maintenanceWindowTimeInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.maintenanceWindowTimeInput"></a>

```java
public java.lang.String getMaintenanceWindowTimeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.networkInput"></a>

```java
public java.lang.Object getNetworkInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetwork">ManagedDatabaseRedisNetwork</a>>

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.planInput"></a>

```java
public java.lang.String getPlanInput();
```

- *Type:* java.lang.String

---

##### `poweredInput`<sup>Optional</sup> <a name="poweredInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.poweredInput"></a>

```java
public java.lang.Object getPoweredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.propertiesInput"></a>

```java
public ManagedDatabaseRedisProperties getPropertiesInput();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties">ManagedDatabaseRedisProperties</a>

---

##### `terminationProtectionInput`<sup>Optional</sup> <a name="terminationProtectionInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.terminationProtectionInput"></a>

```java
public java.lang.Object getTerminationProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `maintenanceWindowDow`<sup>Required</sup> <a name="maintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.maintenanceWindowDow"></a>

```java
public java.lang.String getMaintenanceWindowDow();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowTime`<sup>Required</sup> <a name="maintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.maintenanceWindowTime"></a>

```java
public java.lang.String getMaintenanceWindowTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.plan"></a>

```java
public java.lang.String getPlan();
```

- *Type:* java.lang.String

---

##### `powered`<sup>Required</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.powered"></a>

```java
public java.lang.Object getPowered();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `terminationProtection`<sup>Required</sup> <a name="terminationProtection" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.terminationProtection"></a>

```java
public java.lang.Object getTerminationProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDatabaseRedisComponents <a name="ManagedDatabaseRedisComponents" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponents.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_redis.ManagedDatabaseRedisComponents;

ManagedDatabaseRedisComponents.builder()
    .build();
```


### ManagedDatabaseRedisConfig <a name="ManagedDatabaseRedisConfig" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_redis.ManagedDatabaseRedisConfig;

ManagedDatabaseRedisConfig.builder()
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
//  .network(java.util.List<ManagedDatabaseRedisNetwork>)
//  .powered(java.lang.Boolean)
//  .powered(IResolvable)
//  .properties(ManagedDatabaseRedisProperties)
//  .terminationProtection(java.lang.Boolean)
//  .terminationProtection(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.plan">plan</a></code> | <code>java.lang.String</code> | Service plan to use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.title">title</a></code> | <code>java.lang.String</code> | Title of a managed database instance. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#id ManagedDatabaseRedis#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User defined key-value pairs to classify the managed database. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.maintenanceWindowDow">maintenanceWindowDow</a></code> | <code>java.lang.String</code> | Maintenance window day of week. Lower case weekday name (monday, tuesday, ...). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.maintenanceWindowTime">maintenanceWindowTime</a></code> | <code>java.lang.String</code> | Maintenance window UTC time in hh:mm:ss format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.network">network</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetwork">ManagedDatabaseRedisNetwork</a>></code> | network block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.powered">powered</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The administrative power state of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties">ManagedDatabaseRedisProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.terminationProtection">terminationProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, prevents the managed service from being powered off, or deleted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the service.

The name is used as a prefix for the logical hostname. Must be unique within an account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#name ManagedDatabaseRedis#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.plan"></a>

```java
public java.lang.String getPlan();
```

- *Type:* java.lang.String

Service plan to use.

This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#plan ManagedDatabaseRedis#plan}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Title of a managed database instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#title ManagedDatabaseRedis#title}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#zone ManagedDatabaseRedis#zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#id ManagedDatabaseRedis#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User defined key-value pairs to classify the managed database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#labels ManagedDatabaseRedis#labels}

---

##### `maintenanceWindowDow`<sup>Optional</sup> <a name="maintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.maintenanceWindowDow"></a>

```java
public java.lang.String getMaintenanceWindowDow();
```

- *Type:* java.lang.String

Maintenance window day of week. Lower case weekday name (monday, tuesday, ...).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#maintenance_window_dow ManagedDatabaseRedis#maintenance_window_dow}

---

##### `maintenanceWindowTime`<sup>Optional</sup> <a name="maintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.maintenanceWindowTime"></a>

```java
public java.lang.String getMaintenanceWindowTime();
```

- *Type:* java.lang.String

Maintenance window UTC time in hh:mm:ss format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#maintenance_window_time ManagedDatabaseRedis#maintenance_window_time}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.network"></a>

```java
public java.lang.Object getNetwork();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetwork">ManagedDatabaseRedisNetwork</a>>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#network ManagedDatabaseRedis#network}

---

##### `powered`<sup>Optional</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.powered"></a>

```java
public java.lang.Object getPowered();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The administrative power state of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#powered ManagedDatabaseRedis#powered}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.properties"></a>

```java
public ManagedDatabaseRedisProperties getProperties();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties">ManagedDatabaseRedisProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#properties ManagedDatabaseRedis#properties}

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.terminationProtection"></a>

```java
public java.lang.Object getTerminationProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, prevents the managed service from being powered off, or deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#termination_protection ManagedDatabaseRedis#termination_protection}

---

### ManagedDatabaseRedisNetwork <a name="ManagedDatabaseRedisNetwork" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_redis.ManagedDatabaseRedisNetwork;

ManagedDatabaseRedisNetwork.builder()
    .family(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
    .uuid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetwork.property.family">family</a></code> | <code>java.lang.String</code> | Network family. Currently only `IPv4` is supported. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetwork.property.name">name</a></code> | <code>java.lang.String</code> | The name of the network. Must be unique within the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetwork.property.type">type</a></code> | <code>java.lang.String</code> | The type of the network. Must be private. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetwork.property.uuid">uuid</a></code> | <code>java.lang.String</code> | Private network UUID. Must reside in the same zone as the database. |

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetwork.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

Network family. Currently only `IPv4` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#family ManagedDatabaseRedis#family}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetwork.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the network. Must be unique within the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#name ManagedDatabaseRedis#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetwork.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the network. Must be private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#type ManagedDatabaseRedis#type}

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetwork.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

Private network UUID. Must reside in the same zone as the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#uuid ManagedDatabaseRedis#uuid}

---

### ManagedDatabaseRedisNodeStates <a name="ManagedDatabaseRedisNodeStates" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_redis.ManagedDatabaseRedisNodeStates;

ManagedDatabaseRedisNodeStates.builder()
    .build();
```


### ManagedDatabaseRedisProperties <a name="ManagedDatabaseRedisProperties" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_redis.ManagedDatabaseRedisProperties;

ManagedDatabaseRedisProperties.builder()
//  .automaticUtilityNetworkIpFilter(java.lang.Boolean)
//  .automaticUtilityNetworkIpFilter(IResolvable)
//  .backupHour(java.lang.Number)
//  .backupMinute(java.lang.Number)
//  .ipFilter(java.util.List<java.lang.String>)
//  .migration(ManagedDatabaseRedisPropertiesMigration)
//  .publicAccess(java.lang.Boolean)
//  .publicAccess(IResolvable)
//  .redisAclChannelsDefault(java.lang.String)
//  .redisIoThreads(java.lang.Number)
//  .redisLfuDecayTime(java.lang.Number)
//  .redisLfuLogFactor(java.lang.Number)
//  .redisMaxmemoryPolicy(java.lang.String)
//  .redisNotifyKeyspaceEvents(java.lang.String)
//  .redisNumberOfDatabases(java.lang.Number)
//  .redisPersistence(java.lang.String)
//  .redisPubsubClientOutputBufferLimit(java.lang.Number)
//  .redisSsl(java.lang.Boolean)
//  .redisSsl(IResolvable)
//  .redisTimeout(java.lang.Number)
//  .redisVersion(java.lang.String)
//  .serviceLog(java.lang.Boolean)
//  .serviceLog(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.automaticUtilityNetworkIpFilter">automaticUtilityNetworkIpFilter</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.backupHour">backupHour</a></code> | <code>java.lang.Number</code> | The hour of day (in UTC) when backup for the service is started. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.backupMinute">backupMinute</a></code> | <code>java.lang.Number</code> | The minute of an hour when backup for the service is started. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.ipFilter">ipFilter</a></code> | <code>java.util.List<java.lang.String></code> | IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.migration">migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration">ManagedDatabaseRedisPropertiesMigration</a></code> | migration block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.publicAccess">publicAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Public Access. Allow access to the service from the public Internet. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisAclChannelsDefault">redisAclChannelsDefault</a></code> | <code>java.lang.String</code> | Default ACL for pub/sub channels used when Redis user is created. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisIoThreads">redisIoThreads</a></code> | <code>java.lang.Number</code> | Redis IO thread count. Set Redis IO thread count. Changing this will cause a restart of the Redis service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisLfuDecayTime">redisLfuDecayTime</a></code> | <code>java.lang.Number</code> | LFU maxmemory-policy counter decay time in minutes. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisLfuLogFactor">redisLfuLogFactor</a></code> | <code>java.lang.Number</code> | Counter logarithm factor for volatile-lfu and allkeys-lfu maxmemory-policies. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisMaxmemoryPolicy">redisMaxmemoryPolicy</a></code> | <code>java.lang.String</code> | Redis maxmemory-policy. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisNotifyKeyspaceEvents">redisNotifyKeyspaceEvents</a></code> | <code>java.lang.String</code> | Set notify-keyspace-events option. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisNumberOfDatabases">redisNumberOfDatabases</a></code> | <code>java.lang.Number</code> | Number of Redis databases. Set number of Redis databases. Changing this will cause a restart of the Redis service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisPersistence">redisPersistence</a></code> | <code>java.lang.String</code> | Redis persistence. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisPubsubClientOutputBufferLimit">redisPubsubClientOutputBufferLimit</a></code> | <code>java.lang.Number</code> | Pub/sub client output buffer hard limit in MB. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisSsl">redisSsl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Require SSL to access Redis. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisTimeout">redisTimeout</a></code> | <code>java.lang.Number</code> | Redis idle connection timeout in seconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisVersion">redisVersion</a></code> | <code>java.lang.String</code> | Redis major version. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.serviceLog">serviceLog</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Service logging. Store logs for the service so that they are available in the HTTP API and console. |

---

##### `automaticUtilityNetworkIpFilter`<sup>Optional</sup> <a name="automaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.automaticUtilityNetworkIpFilter"></a>

```java
public java.lang.Object getAutomaticUtilityNetworkIpFilter();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#automatic_utility_network_ip_filter ManagedDatabaseRedis#automatic_utility_network_ip_filter}

---

##### `backupHour`<sup>Optional</sup> <a name="backupHour" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.backupHour"></a>

```java
public java.lang.Number getBackupHour();
```

- *Type:* java.lang.Number

The hour of day (in UTC) when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#backup_hour ManagedDatabaseRedis#backup_hour}

---

##### `backupMinute`<sup>Optional</sup> <a name="backupMinute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.backupMinute"></a>

```java
public java.lang.Number getBackupMinute();
```

- *Type:* java.lang.Number

The minute of an hour when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#backup_minute ManagedDatabaseRedis#backup_minute}

---

##### `ipFilter`<sup>Optional</sup> <a name="ipFilter" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.ipFilter"></a>

```java
public java.util.List<java.lang.String> getIpFilter();
```

- *Type:* java.util.List<java.lang.String>

IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#ip_filter ManagedDatabaseRedis#ip_filter}

---

##### `migration`<sup>Optional</sup> <a name="migration" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.migration"></a>

```java
public ManagedDatabaseRedisPropertiesMigration getMigration();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration">ManagedDatabaseRedisPropertiesMigration</a>

migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#migration ManagedDatabaseRedis#migration}

---

##### `publicAccess`<sup>Optional</sup> <a name="publicAccess" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.publicAccess"></a>

```java
public java.lang.Object getPublicAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Public Access. Allow access to the service from the public Internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#public_access ManagedDatabaseRedis#public_access}

---

##### `redisAclChannelsDefault`<sup>Optional</sup> <a name="redisAclChannelsDefault" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisAclChannelsDefault"></a>

```java
public java.lang.String getRedisAclChannelsDefault();
```

- *Type:* java.lang.String

Default ACL for pub/sub channels used when Redis user is created.

Determines default pub/sub channels' ACL for new users if ACL is not supplied. When this option is not defined, all_channels is assumed to keep backward compatibility. This option doesn't affect Redis configuration acl-pubsub-default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#redis_acl_channels_default ManagedDatabaseRedis#redis_acl_channels_default}

---

##### `redisIoThreads`<sup>Optional</sup> <a name="redisIoThreads" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisIoThreads"></a>

```java
public java.lang.Number getRedisIoThreads();
```

- *Type:* java.lang.Number

Redis IO thread count. Set Redis IO thread count. Changing this will cause a restart of the Redis service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#redis_io_threads ManagedDatabaseRedis#redis_io_threads}

---

##### `redisLfuDecayTime`<sup>Optional</sup> <a name="redisLfuDecayTime" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisLfuDecayTime"></a>

```java
public java.lang.Number getRedisLfuDecayTime();
```

- *Type:* java.lang.Number

LFU maxmemory-policy counter decay time in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#redis_lfu_decay_time ManagedDatabaseRedis#redis_lfu_decay_time}

---

##### `redisLfuLogFactor`<sup>Optional</sup> <a name="redisLfuLogFactor" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisLfuLogFactor"></a>

```java
public java.lang.Number getRedisLfuLogFactor();
```

- *Type:* java.lang.Number

Counter logarithm factor for volatile-lfu and allkeys-lfu maxmemory-policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#redis_lfu_log_factor ManagedDatabaseRedis#redis_lfu_log_factor}

---

##### `redisMaxmemoryPolicy`<sup>Optional</sup> <a name="redisMaxmemoryPolicy" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisMaxmemoryPolicy"></a>

```java
public java.lang.String getRedisMaxmemoryPolicy();
```

- *Type:* java.lang.String

Redis maxmemory-policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#redis_maxmemory_policy ManagedDatabaseRedis#redis_maxmemory_policy}

---

##### `redisNotifyKeyspaceEvents`<sup>Optional</sup> <a name="redisNotifyKeyspaceEvents" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisNotifyKeyspaceEvents"></a>

```java
public java.lang.String getRedisNotifyKeyspaceEvents();
```

- *Type:* java.lang.String

Set notify-keyspace-events option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#redis_notify_keyspace_events ManagedDatabaseRedis#redis_notify_keyspace_events}

---

##### `redisNumberOfDatabases`<sup>Optional</sup> <a name="redisNumberOfDatabases" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisNumberOfDatabases"></a>

```java
public java.lang.Number getRedisNumberOfDatabases();
```

- *Type:* java.lang.Number

Number of Redis databases. Set number of Redis databases. Changing this will cause a restart of the Redis service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#redis_number_of_databases ManagedDatabaseRedis#redis_number_of_databases}

---

##### `redisPersistence`<sup>Optional</sup> <a name="redisPersistence" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisPersistence"></a>

```java
public java.lang.String getRedisPersistence();
```

- *Type:* java.lang.String

Redis persistence.

When persistence is 'rdb', Redis does RDB dumps each 10 minutes if any key is changed. Also RDB dumps are done according to the backup schedule for backup purposes. When persistence is 'off', no RDB dumps or backups are done, so data can be lost at any moment if the service is restarted for any reason, or if the service is powered off. Also, the service can't be forked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#redis_persistence ManagedDatabaseRedis#redis_persistence}

---

##### `redisPubsubClientOutputBufferLimit`<sup>Optional</sup> <a name="redisPubsubClientOutputBufferLimit" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisPubsubClientOutputBufferLimit"></a>

```java
public java.lang.Number getRedisPubsubClientOutputBufferLimit();
```

- *Type:* java.lang.Number

Pub/sub client output buffer hard limit in MB.

Set output buffer limit for pub / sub clients in MB. The value is the hard limit, the soft limit is 1/4 of the hard limit. When setting the limit, be mindful of the available memory in the selected service plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#redis_pubsub_client_output_buffer_limit ManagedDatabaseRedis#redis_pubsub_client_output_buffer_limit}

---

##### `redisSsl`<sup>Optional</sup> <a name="redisSsl" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisSsl"></a>

```java
public java.lang.Object getRedisSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Require SSL to access Redis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#redis_ssl ManagedDatabaseRedis#redis_ssl}

---

##### `redisTimeout`<sup>Optional</sup> <a name="redisTimeout" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisTimeout"></a>

```java
public java.lang.Number getRedisTimeout();
```

- *Type:* java.lang.Number

Redis idle connection timeout in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#redis_timeout ManagedDatabaseRedis#redis_timeout}

---

##### `redisVersion`<sup>Optional</sup> <a name="redisVersion" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisVersion"></a>

```java
public java.lang.String getRedisVersion();
```

- *Type:* java.lang.String

Redis major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#redis_version ManagedDatabaseRedis#redis_version}

---

##### `serviceLog`<sup>Optional</sup> <a name="serviceLog" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.serviceLog"></a>

```java
public java.lang.Object getServiceLog();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Service logging. Store logs for the service so that they are available in the HTTP API and console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#service_log ManagedDatabaseRedis#service_log}

---

### ManagedDatabaseRedisPropertiesMigration <a name="ManagedDatabaseRedisPropertiesMigration" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_redis.ManagedDatabaseRedisPropertiesMigration;

ManagedDatabaseRedisPropertiesMigration.builder()
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
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.dbname">dbname</a></code> | <code>java.lang.String</code> | Database name for bootstrapping the initial connection. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.host">host</a></code> | <code>java.lang.String</code> | Hostname or IP address of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.ignoreDbs">ignoreDbs</a></code> | <code>java.lang.String</code> | Comma-separated list of databases, which should be ignored during migration (supported by MySQL and PostgreSQL only at the moment). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.ignoreRoles">ignoreRoles</a></code> | <code>java.lang.String</code> | Comma-separated list of database roles, which should be ignored during migration (supported by PostgreSQL only at the moment). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.method">method</a></code> | <code>java.lang.String</code> | The migration method to be used (currently supported only by Redis, Dragonfly, MySQL and PostgreSQL service types). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.password">password</a></code> | <code>java.lang.String</code> | Password for authentication with the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.port">port</a></code> | <code>java.lang.Number</code> | Port number of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.ssl">ssl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The server where to migrate data from is secured with SSL. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.username">username</a></code> | <code>java.lang.String</code> | User name for authentication with the server where to migrate data from. |

---

##### `dbname`<sup>Optional</sup> <a name="dbname" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.dbname"></a>

```java
public java.lang.String getDbname();
```

- *Type:* java.lang.String

Database name for bootstrapping the initial connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#dbname ManagedDatabaseRedis#dbname}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Hostname or IP address of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#host ManagedDatabaseRedis#host}

---

##### `ignoreDbs`<sup>Optional</sup> <a name="ignoreDbs" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.ignoreDbs"></a>

```java
public java.lang.String getIgnoreDbs();
```

- *Type:* java.lang.String

Comma-separated list of databases, which should be ignored during migration (supported by MySQL and PostgreSQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#ignore_dbs ManagedDatabaseRedis#ignore_dbs}

---

##### `ignoreRoles`<sup>Optional</sup> <a name="ignoreRoles" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.ignoreRoles"></a>

```java
public java.lang.String getIgnoreRoles();
```

- *Type:* java.lang.String

Comma-separated list of database roles, which should be ignored during migration (supported by PostgreSQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#ignore_roles ManagedDatabaseRedis#ignore_roles}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

The migration method to be used (currently supported only by Redis, Dragonfly, MySQL and PostgreSQL service types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#method ManagedDatabaseRedis#method}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#password ManagedDatabaseRedis#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Port number of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#port ManagedDatabaseRedis#port}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.ssl"></a>

```java
public java.lang.Object getSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The server where to migrate data from is secured with SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#ssl ManagedDatabaseRedis#ssl}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

User name for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_redis#username ManagedDatabaseRedis#username}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedDatabaseRedisComponentsList <a name="ManagedDatabaseRedisComponentsList" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_redis.ManagedDatabaseRedisComponentsList;

new ManagedDatabaseRedisComponentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.get"></a>

```java
public ManagedDatabaseRedisComponentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ManagedDatabaseRedisComponentsOutputReference <a name="ManagedDatabaseRedisComponentsOutputReference" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_redis.ManagedDatabaseRedisComponentsOutputReference;

new ManagedDatabaseRedisComponentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.component">component</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.route">route</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.usage">usage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponents">ManagedDatabaseRedisComponents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.component"></a>

```java
public java.lang.String getComponent();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.route"></a>

```java
public java.lang.String getRoute();
```

- *Type:* java.lang.String

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.usage"></a>

```java
public java.lang.String getUsage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.internalValue"></a>

```java
public ManagedDatabaseRedisComponents getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponents">ManagedDatabaseRedisComponents</a>

---


### ManagedDatabaseRedisNetworkList <a name="ManagedDatabaseRedisNetworkList" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_redis.ManagedDatabaseRedisNetworkList;

new ManagedDatabaseRedisNetworkList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkList.get"></a>

```java
public ManagedDatabaseRedisNetworkOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetwork">ManagedDatabaseRedisNetwork</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetwork">ManagedDatabaseRedisNetwork</a>>

---


### ManagedDatabaseRedisNetworkOutputReference <a name="ManagedDatabaseRedisNetworkOutputReference" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_redis.ManagedDatabaseRedisNetworkOutputReference;

new ManagedDatabaseRedisNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.property.familyInput">familyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.property.uuidInput">uuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.property.family">family</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetwork">ManagedDatabaseRedisNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `familyInput`<sup>Optional</sup> <a name="familyInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.property.familyInput"></a>

```java
public java.lang.String getFamilyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.property.uuidInput"></a>

```java
public java.lang.String getUuidInput();
```

- *Type:* java.lang.String

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetworkOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNetwork">ManagedDatabaseRedisNetwork</a>

---


### ManagedDatabaseRedisNodeStatesList <a name="ManagedDatabaseRedisNodeStatesList" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_redis.ManagedDatabaseRedisNodeStatesList;

new ManagedDatabaseRedisNodeStatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.get"></a>

```java
public ManagedDatabaseRedisNodeStatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ManagedDatabaseRedisNodeStatesOutputReference <a name="ManagedDatabaseRedisNodeStatesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_redis.ManagedDatabaseRedisNodeStatesOutputReference;

new ManagedDatabaseRedisNodeStatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStates">ManagedDatabaseRedisNodeStates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.internalValue"></a>

```java
public ManagedDatabaseRedisNodeStates getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStates">ManagedDatabaseRedisNodeStates</a>

---


### ManagedDatabaseRedisPropertiesMigrationOutputReference <a name="ManagedDatabaseRedisPropertiesMigrationOutputReference" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_redis.ManagedDatabaseRedisPropertiesMigrationOutputReference;

new ManagedDatabaseRedisPropertiesMigrationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetDbname">resetDbname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetIgnoreDbs">resetIgnoreDbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetIgnoreRoles">resetIgnoreRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetSsl">resetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDbname` <a name="resetDbname" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetDbname"></a>

```java
public void resetDbname()
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetHost"></a>

```java
public void resetHost()
```

##### `resetIgnoreDbs` <a name="resetIgnoreDbs" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetIgnoreDbs"></a>

```java
public void resetIgnoreDbs()
```

##### `resetIgnoreRoles` <a name="resetIgnoreRoles" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetIgnoreRoles"></a>

```java
public void resetIgnoreRoles()
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetSsl` <a name="resetSsl" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetSsl"></a>

```java
public void resetSsl()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.dbnameInput">dbnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.ignoreDbsInput">ignoreDbsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.ignoreRolesInput">ignoreRolesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.sslInput">sslInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.dbname">dbname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.ignoreDbs">ignoreDbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.ignoreRoles">ignoreRoles</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.ssl">ssl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration">ManagedDatabaseRedisPropertiesMigration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbnameInput`<sup>Optional</sup> <a name="dbnameInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.dbnameInput"></a>

```java
public java.lang.String getDbnameInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `ignoreDbsInput`<sup>Optional</sup> <a name="ignoreDbsInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.ignoreDbsInput"></a>

```java
public java.lang.String getIgnoreDbsInput();
```

- *Type:* java.lang.String

---

##### `ignoreRolesInput`<sup>Optional</sup> <a name="ignoreRolesInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.ignoreRolesInput"></a>

```java
public java.lang.String getIgnoreRolesInput();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `sslInput`<sup>Optional</sup> <a name="sslInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.sslInput"></a>

```java
public java.lang.Object getSslInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `dbname`<sup>Required</sup> <a name="dbname" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.dbname"></a>

```java
public java.lang.String getDbname();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `ignoreDbs`<sup>Required</sup> <a name="ignoreDbs" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.ignoreDbs"></a>

```java
public java.lang.String getIgnoreDbs();
```

- *Type:* java.lang.String

---

##### `ignoreRoles`<sup>Required</sup> <a name="ignoreRoles" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.ignoreRoles"></a>

```java
public java.lang.String getIgnoreRoles();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.ssl"></a>

```java
public java.lang.Object getSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.internalValue"></a>

```java
public ManagedDatabaseRedisPropertiesMigration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration">ManagedDatabaseRedisPropertiesMigration</a>

---


### ManagedDatabaseRedisPropertiesOutputReference <a name="ManagedDatabaseRedisPropertiesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_redis.ManagedDatabaseRedisPropertiesOutputReference;

new ManagedDatabaseRedisPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.putMigration">putMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter">resetAutomaticUtilityNetworkIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetBackupHour">resetBackupHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetBackupMinute">resetBackupMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetIpFilter">resetIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetMigration">resetMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetPublicAccess">resetPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisAclChannelsDefault">resetRedisAclChannelsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisIoThreads">resetRedisIoThreads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisLfuDecayTime">resetRedisLfuDecayTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisLfuLogFactor">resetRedisLfuLogFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisMaxmemoryPolicy">resetRedisMaxmemoryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisNotifyKeyspaceEvents">resetRedisNotifyKeyspaceEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisNumberOfDatabases">resetRedisNumberOfDatabases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisPersistence">resetRedisPersistence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisPubsubClientOutputBufferLimit">resetRedisPubsubClientOutputBufferLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisSsl">resetRedisSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisTimeout">resetRedisTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisVersion">resetRedisVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetServiceLog">resetServiceLog</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMigration` <a name="putMigration" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.putMigration"></a>

```java
public void putMigration(ManagedDatabaseRedisPropertiesMigration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.putMigration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration">ManagedDatabaseRedisPropertiesMigration</a>

---

##### `resetAutomaticUtilityNetworkIpFilter` <a name="resetAutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter"></a>

```java
public void resetAutomaticUtilityNetworkIpFilter()
```

##### `resetBackupHour` <a name="resetBackupHour" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetBackupHour"></a>

```java
public void resetBackupHour()
```

##### `resetBackupMinute` <a name="resetBackupMinute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetBackupMinute"></a>

```java
public void resetBackupMinute()
```

##### `resetIpFilter` <a name="resetIpFilter" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetIpFilter"></a>

```java
public void resetIpFilter()
```

##### `resetMigration` <a name="resetMigration" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetMigration"></a>

```java
public void resetMigration()
```

##### `resetPublicAccess` <a name="resetPublicAccess" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetPublicAccess"></a>

```java
public void resetPublicAccess()
```

##### `resetRedisAclChannelsDefault` <a name="resetRedisAclChannelsDefault" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisAclChannelsDefault"></a>

```java
public void resetRedisAclChannelsDefault()
```

##### `resetRedisIoThreads` <a name="resetRedisIoThreads" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisIoThreads"></a>

```java
public void resetRedisIoThreads()
```

##### `resetRedisLfuDecayTime` <a name="resetRedisLfuDecayTime" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisLfuDecayTime"></a>

```java
public void resetRedisLfuDecayTime()
```

##### `resetRedisLfuLogFactor` <a name="resetRedisLfuLogFactor" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisLfuLogFactor"></a>

```java
public void resetRedisLfuLogFactor()
```

##### `resetRedisMaxmemoryPolicy` <a name="resetRedisMaxmemoryPolicy" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisMaxmemoryPolicy"></a>

```java
public void resetRedisMaxmemoryPolicy()
```

##### `resetRedisNotifyKeyspaceEvents` <a name="resetRedisNotifyKeyspaceEvents" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisNotifyKeyspaceEvents"></a>

```java
public void resetRedisNotifyKeyspaceEvents()
```

##### `resetRedisNumberOfDatabases` <a name="resetRedisNumberOfDatabases" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisNumberOfDatabases"></a>

```java
public void resetRedisNumberOfDatabases()
```

##### `resetRedisPersistence` <a name="resetRedisPersistence" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisPersistence"></a>

```java
public void resetRedisPersistence()
```

##### `resetRedisPubsubClientOutputBufferLimit` <a name="resetRedisPubsubClientOutputBufferLimit" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisPubsubClientOutputBufferLimit"></a>

```java
public void resetRedisPubsubClientOutputBufferLimit()
```

##### `resetRedisSsl` <a name="resetRedisSsl" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisSsl"></a>

```java
public void resetRedisSsl()
```

##### `resetRedisTimeout` <a name="resetRedisTimeout" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisTimeout"></a>

```java
public void resetRedisTimeout()
```

##### `resetRedisVersion` <a name="resetRedisVersion" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisVersion"></a>

```java
public void resetRedisVersion()
```

##### `resetServiceLog` <a name="resetServiceLog" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetServiceLog"></a>

```java
public void resetServiceLog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.migration">migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference">ManagedDatabaseRedisPropertiesMigrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput">automaticUtilityNetworkIpFilterInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.backupHourInput">backupHourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.backupMinuteInput">backupMinuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.ipFilterInput">ipFilterInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.migrationInput">migrationInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration">ManagedDatabaseRedisPropertiesMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.publicAccessInput">publicAccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisAclChannelsDefaultInput">redisAclChannelsDefaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisIoThreadsInput">redisIoThreadsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisLfuDecayTimeInput">redisLfuDecayTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisLfuLogFactorInput">redisLfuLogFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisMaxmemoryPolicyInput">redisMaxmemoryPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisNotifyKeyspaceEventsInput">redisNotifyKeyspaceEventsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisNumberOfDatabasesInput">redisNumberOfDatabasesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisPersistenceInput">redisPersistenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisPubsubClientOutputBufferLimitInput">redisPubsubClientOutputBufferLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisSslInput">redisSslInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisTimeoutInput">redisTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisVersionInput">redisVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.serviceLogInput">serviceLogInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.automaticUtilityNetworkIpFilter">automaticUtilityNetworkIpFilter</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.backupHour">backupHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.backupMinute">backupMinute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.ipFilter">ipFilter</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.publicAccess">publicAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisAclChannelsDefault">redisAclChannelsDefault</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisIoThreads">redisIoThreads</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisLfuDecayTime">redisLfuDecayTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisLfuLogFactor">redisLfuLogFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisMaxmemoryPolicy">redisMaxmemoryPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisNotifyKeyspaceEvents">redisNotifyKeyspaceEvents</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisNumberOfDatabases">redisNumberOfDatabases</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisPersistence">redisPersistence</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisPubsubClientOutputBufferLimit">redisPubsubClientOutputBufferLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisSsl">redisSsl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisTimeout">redisTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisVersion">redisVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.serviceLog">serviceLog</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties">ManagedDatabaseRedisProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `migration`<sup>Required</sup> <a name="migration" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.migration"></a>

```java
public ManagedDatabaseRedisPropertiesMigrationOutputReference getMigration();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference">ManagedDatabaseRedisPropertiesMigrationOutputReference</a>

---

##### `automaticUtilityNetworkIpFilterInput`<sup>Optional</sup> <a name="automaticUtilityNetworkIpFilterInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput"></a>

```java
public java.lang.Object getAutomaticUtilityNetworkIpFilterInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backupHourInput`<sup>Optional</sup> <a name="backupHourInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.backupHourInput"></a>

```java
public java.lang.Number getBackupHourInput();
```

- *Type:* java.lang.Number

---

##### `backupMinuteInput`<sup>Optional</sup> <a name="backupMinuteInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.backupMinuteInput"></a>

```java
public java.lang.Number getBackupMinuteInput();
```

- *Type:* java.lang.Number

---

##### `ipFilterInput`<sup>Optional</sup> <a name="ipFilterInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.ipFilterInput"></a>

```java
public java.util.List<java.lang.String> getIpFilterInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `migrationInput`<sup>Optional</sup> <a name="migrationInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.migrationInput"></a>

```java
public ManagedDatabaseRedisPropertiesMigration getMigrationInput();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration">ManagedDatabaseRedisPropertiesMigration</a>

---

##### `publicAccessInput`<sup>Optional</sup> <a name="publicAccessInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.publicAccessInput"></a>

```java
public java.lang.Object getPublicAccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `redisAclChannelsDefaultInput`<sup>Optional</sup> <a name="redisAclChannelsDefaultInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisAclChannelsDefaultInput"></a>

```java
public java.lang.String getRedisAclChannelsDefaultInput();
```

- *Type:* java.lang.String

---

##### `redisIoThreadsInput`<sup>Optional</sup> <a name="redisIoThreadsInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisIoThreadsInput"></a>

```java
public java.lang.Number getRedisIoThreadsInput();
```

- *Type:* java.lang.Number

---

##### `redisLfuDecayTimeInput`<sup>Optional</sup> <a name="redisLfuDecayTimeInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisLfuDecayTimeInput"></a>

```java
public java.lang.Number getRedisLfuDecayTimeInput();
```

- *Type:* java.lang.Number

---

##### `redisLfuLogFactorInput`<sup>Optional</sup> <a name="redisLfuLogFactorInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisLfuLogFactorInput"></a>

```java
public java.lang.Number getRedisLfuLogFactorInput();
```

- *Type:* java.lang.Number

---

##### `redisMaxmemoryPolicyInput`<sup>Optional</sup> <a name="redisMaxmemoryPolicyInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisMaxmemoryPolicyInput"></a>

```java
public java.lang.String getRedisMaxmemoryPolicyInput();
```

- *Type:* java.lang.String

---

##### `redisNotifyKeyspaceEventsInput`<sup>Optional</sup> <a name="redisNotifyKeyspaceEventsInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisNotifyKeyspaceEventsInput"></a>

```java
public java.lang.String getRedisNotifyKeyspaceEventsInput();
```

- *Type:* java.lang.String

---

##### `redisNumberOfDatabasesInput`<sup>Optional</sup> <a name="redisNumberOfDatabasesInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisNumberOfDatabasesInput"></a>

```java
public java.lang.Number getRedisNumberOfDatabasesInput();
```

- *Type:* java.lang.Number

---

##### `redisPersistenceInput`<sup>Optional</sup> <a name="redisPersistenceInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisPersistenceInput"></a>

```java
public java.lang.String getRedisPersistenceInput();
```

- *Type:* java.lang.String

---

##### `redisPubsubClientOutputBufferLimitInput`<sup>Optional</sup> <a name="redisPubsubClientOutputBufferLimitInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisPubsubClientOutputBufferLimitInput"></a>

```java
public java.lang.Number getRedisPubsubClientOutputBufferLimitInput();
```

- *Type:* java.lang.Number

---

##### `redisSslInput`<sup>Optional</sup> <a name="redisSslInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisSslInput"></a>

```java
public java.lang.Object getRedisSslInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `redisTimeoutInput`<sup>Optional</sup> <a name="redisTimeoutInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisTimeoutInput"></a>

```java
public java.lang.Number getRedisTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `redisVersionInput`<sup>Optional</sup> <a name="redisVersionInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisVersionInput"></a>

```java
public java.lang.String getRedisVersionInput();
```

- *Type:* java.lang.String

---

##### `serviceLogInput`<sup>Optional</sup> <a name="serviceLogInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.serviceLogInput"></a>

```java
public java.lang.Object getServiceLogInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `automaticUtilityNetworkIpFilter`<sup>Required</sup> <a name="automaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.automaticUtilityNetworkIpFilter"></a>

```java
public java.lang.Object getAutomaticUtilityNetworkIpFilter();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backupHour`<sup>Required</sup> <a name="backupHour" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.backupHour"></a>

```java
public java.lang.Number getBackupHour();
```

- *Type:* java.lang.Number

---

##### `backupMinute`<sup>Required</sup> <a name="backupMinute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.backupMinute"></a>

```java
public java.lang.Number getBackupMinute();
```

- *Type:* java.lang.Number

---

##### `ipFilter`<sup>Required</sup> <a name="ipFilter" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.ipFilter"></a>

```java
public java.util.List<java.lang.String> getIpFilter();
```

- *Type:* java.util.List<java.lang.String>

---

##### `publicAccess`<sup>Required</sup> <a name="publicAccess" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.publicAccess"></a>

```java
public java.lang.Object getPublicAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `redisAclChannelsDefault`<sup>Required</sup> <a name="redisAclChannelsDefault" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisAclChannelsDefault"></a>

```java
public java.lang.String getRedisAclChannelsDefault();
```

- *Type:* java.lang.String

---

##### `redisIoThreads`<sup>Required</sup> <a name="redisIoThreads" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisIoThreads"></a>

```java
public java.lang.Number getRedisIoThreads();
```

- *Type:* java.lang.Number

---

##### `redisLfuDecayTime`<sup>Required</sup> <a name="redisLfuDecayTime" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisLfuDecayTime"></a>

```java
public java.lang.Number getRedisLfuDecayTime();
```

- *Type:* java.lang.Number

---

##### `redisLfuLogFactor`<sup>Required</sup> <a name="redisLfuLogFactor" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisLfuLogFactor"></a>

```java
public java.lang.Number getRedisLfuLogFactor();
```

- *Type:* java.lang.Number

---

##### `redisMaxmemoryPolicy`<sup>Required</sup> <a name="redisMaxmemoryPolicy" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisMaxmemoryPolicy"></a>

```java
public java.lang.String getRedisMaxmemoryPolicy();
```

- *Type:* java.lang.String

---

##### `redisNotifyKeyspaceEvents`<sup>Required</sup> <a name="redisNotifyKeyspaceEvents" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisNotifyKeyspaceEvents"></a>

```java
public java.lang.String getRedisNotifyKeyspaceEvents();
```

- *Type:* java.lang.String

---

##### `redisNumberOfDatabases`<sup>Required</sup> <a name="redisNumberOfDatabases" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisNumberOfDatabases"></a>

```java
public java.lang.Number getRedisNumberOfDatabases();
```

- *Type:* java.lang.Number

---

##### `redisPersistence`<sup>Required</sup> <a name="redisPersistence" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisPersistence"></a>

```java
public java.lang.String getRedisPersistence();
```

- *Type:* java.lang.String

---

##### `redisPubsubClientOutputBufferLimit`<sup>Required</sup> <a name="redisPubsubClientOutputBufferLimit" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisPubsubClientOutputBufferLimit"></a>

```java
public java.lang.Number getRedisPubsubClientOutputBufferLimit();
```

- *Type:* java.lang.Number

---

##### `redisSsl`<sup>Required</sup> <a name="redisSsl" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisSsl"></a>

```java
public java.lang.Object getRedisSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `redisTimeout`<sup>Required</sup> <a name="redisTimeout" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisTimeout"></a>

```java
public java.lang.Number getRedisTimeout();
```

- *Type:* java.lang.Number

---

##### `redisVersion`<sup>Required</sup> <a name="redisVersion" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisVersion"></a>

```java
public java.lang.String getRedisVersion();
```

- *Type:* java.lang.String

---

##### `serviceLog`<sup>Required</sup> <a name="serviceLog" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.serviceLog"></a>

```java
public java.lang.Object getServiceLog();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.internalValue"></a>

```java
public ManagedDatabaseRedisProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties">ManagedDatabaseRedisProperties</a>

---



