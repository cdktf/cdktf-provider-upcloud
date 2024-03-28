# `managedDatabasePostgresql` Submodule <a name="`managedDatabasePostgresql` Submodule" id="@cdktf/provider-upcloud.managedDatabasePostgresql"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDatabasePostgresql <a name="ManagedDatabasePostgresql" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql upcloud_managed_database_postgresql}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_postgresql.ManagedDatabasePostgresql;

ManagedDatabasePostgresql.Builder.create(Construct scope, java.lang.String id)
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
//  .maintenanceWindowDow(java.lang.String)
//  .maintenanceWindowTime(java.lang.String)
//  .network(IResolvable)
//  .network(java.util.List<ManagedDatabasePostgresqlNetwork>)
//  .powered(java.lang.Boolean)
//  .powered(IResolvable)
//  .properties(ManagedDatabasePostgresqlProperties)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.plan">plan</a></code> | <code>java.lang.String</code> | Service plan to use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | Title of a managed database instance. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#id ManagedDatabasePostgresql#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.maintenanceWindowDow">maintenanceWindowDow</a></code> | <code>java.lang.String</code> | Maintenance window day of week. Lower case weekday name (monday, tuesday, ...). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.maintenanceWindowTime">maintenanceWindowTime</a></code> | <code>java.lang.String</code> | Maintenance window UTC time in hh:mm:ss format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.network">network</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork">ManagedDatabasePostgresqlNetwork</a>></code> | network block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.powered">powered</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The administrative power state of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a></code> | properties block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the service.

The name is used as a prefix for the logical hostname. Must be unique within an account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#name ManagedDatabasePostgresql#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.plan"></a>

- *Type:* java.lang.String

Service plan to use.

This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#plan ManagedDatabasePostgresql#plan}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.title"></a>

- *Type:* java.lang.String

Title of a managed database instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#title ManagedDatabasePostgresql#title}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#zone ManagedDatabasePostgresql#zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#id ManagedDatabasePostgresql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceWindowDow`<sup>Optional</sup> <a name="maintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.maintenanceWindowDow"></a>

- *Type:* java.lang.String

Maintenance window day of week. Lower case weekday name (monday, tuesday, ...).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#maintenance_window_dow ManagedDatabasePostgresql#maintenance_window_dow}

---

##### `maintenanceWindowTime`<sup>Optional</sup> <a name="maintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.maintenanceWindowTime"></a>

- *Type:* java.lang.String

Maintenance window UTC time in hh:mm:ss format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#maintenance_window_time ManagedDatabasePostgresql#maintenance_window_time}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.network"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork">ManagedDatabasePostgresqlNetwork</a>>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#network ManagedDatabasePostgresql#network}

---

##### `powered`<sup>Optional</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.powered"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The administrative power state of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#powered ManagedDatabasePostgresql#powered}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#properties ManagedDatabasePostgresql#properties}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetMaintenanceWindowDow">resetMaintenanceWindowDow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetMaintenanceWindowTime">resetMaintenanceWindowTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetPowered">resetPowered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putNetwork"></a>

```java
public void putNetwork(IResolvable OR java.util.List<ManagedDatabasePostgresqlNetwork> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putNetwork.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork">ManagedDatabasePostgresqlNetwork</a>>

---

##### `putProperties` <a name="putProperties" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties"></a>

```java
public void putProperties(ManagedDatabasePostgresqlProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetId"></a>

```java
public void resetId()
```

##### `resetMaintenanceWindowDow` <a name="resetMaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetMaintenanceWindowDow"></a>

```java
public void resetMaintenanceWindowDow()
```

##### `resetMaintenanceWindowTime` <a name="resetMaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetMaintenanceWindowTime"></a>

```java
public void resetMaintenanceWindowTime()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetPowered` <a name="resetPowered" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetPowered"></a>

```java
public void resetPowered()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetProperties"></a>

```java
public void resetProperties()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedDatabasePostgresql resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_postgresql.ManagedDatabasePostgresql;

ManagedDatabasePostgresql.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_postgresql.ManagedDatabasePostgresql;

ManagedDatabasePostgresql.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_postgresql.ManagedDatabasePostgresql;

ManagedDatabasePostgresql.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_postgresql.ManagedDatabasePostgresql;

ManagedDatabasePostgresql.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ManagedDatabasePostgresql.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ManagedDatabasePostgresql resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ManagedDatabasePostgresql to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ManagedDatabasePostgresql that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ManagedDatabasePostgresql to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.components">components</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList">ManagedDatabasePostgresqlComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.network">network</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList">ManagedDatabasePostgresqlNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.nodeStates">nodeStates</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList">ManagedDatabasePostgresqlNodeStatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.primaryDatabase">primaryDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference">ManagedDatabasePostgresqlPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceHost">serviceHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.servicePassword">servicePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.servicePort">servicePort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceUri">serviceUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceUsername">serviceUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.sslmode">sslmode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowDowInput">maintenanceWindowDowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowTimeInput">maintenanceWindowTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.networkInput">networkInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork">ManagedDatabasePostgresqlNetwork</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.planInput">planInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.poweredInput">poweredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowDow">maintenanceWindowDow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowTime">maintenanceWindowTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.plan">plan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.powered">powered</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.components"></a>

```java
public ManagedDatabasePostgresqlComponentsList getComponents();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList">ManagedDatabasePostgresqlComponentsList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.network"></a>

```java
public ManagedDatabasePostgresqlNetworkList getNetwork();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList">ManagedDatabasePostgresqlNetworkList</a>

---

##### `nodeStates`<sup>Required</sup> <a name="nodeStates" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.nodeStates"></a>

```java
public ManagedDatabasePostgresqlNodeStatesList getNodeStates();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList">ManagedDatabasePostgresqlNodeStatesList</a>

---

##### `primaryDatabase`<sup>Required</sup> <a name="primaryDatabase" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.primaryDatabase"></a>

```java
public java.lang.String getPrimaryDatabase();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.properties"></a>

```java
public ManagedDatabasePostgresqlPropertiesOutputReference getProperties();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference">ManagedDatabasePostgresqlPropertiesOutputReference</a>

---

##### `serviceHost`<sup>Required</sup> <a name="serviceHost" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceHost"></a>

```java
public java.lang.String getServiceHost();
```

- *Type:* java.lang.String

---

##### `servicePassword`<sup>Required</sup> <a name="servicePassword" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.servicePassword"></a>

```java
public java.lang.String getServicePassword();
```

- *Type:* java.lang.String

---

##### `servicePort`<sup>Required</sup> <a name="servicePort" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.servicePort"></a>

```java
public java.lang.String getServicePort();
```

- *Type:* java.lang.String

---

##### `serviceUri`<sup>Required</sup> <a name="serviceUri" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceUri"></a>

```java
public java.lang.String getServiceUri();
```

- *Type:* java.lang.String

---

##### `serviceUsername`<sup>Required</sup> <a name="serviceUsername" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceUsername"></a>

```java
public java.lang.String getServiceUsername();
```

- *Type:* java.lang.String

---

##### `sslmode`<sup>Required</sup> <a name="sslmode" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.sslmode"></a>

```java
public java.lang.String getSslmode();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowDowInput`<sup>Optional</sup> <a name="maintenanceWindowDowInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowDowInput"></a>

```java
public java.lang.String getMaintenanceWindowDowInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowTimeInput`<sup>Optional</sup> <a name="maintenanceWindowTimeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowTimeInput"></a>

```java
public java.lang.String getMaintenanceWindowTimeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.networkInput"></a>

```java
public java.lang.Object getNetworkInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork">ManagedDatabasePostgresqlNetwork</a>>

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.planInput"></a>

```java
public java.lang.String getPlanInput();
```

- *Type:* java.lang.String

---

##### `poweredInput`<sup>Optional</sup> <a name="poweredInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.poweredInput"></a>

```java
public java.lang.Object getPoweredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.propertiesInput"></a>

```java
public ManagedDatabasePostgresqlProperties getPropertiesInput();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a>

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowDow`<sup>Required</sup> <a name="maintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowDow"></a>

```java
public java.lang.String getMaintenanceWindowDow();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowTime`<sup>Required</sup> <a name="maintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowTime"></a>

```java
public java.lang.String getMaintenanceWindowTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.plan"></a>

```java
public java.lang.String getPlan();
```

- *Type:* java.lang.String

---

##### `powered`<sup>Required</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.powered"></a>

```java
public java.lang.Object getPowered();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDatabasePostgresqlComponents <a name="ManagedDatabasePostgresqlComponents" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponents.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_postgresql.ManagedDatabasePostgresqlComponents;

ManagedDatabasePostgresqlComponents.builder()
    .build();
```


### ManagedDatabasePostgresqlConfig <a name="ManagedDatabasePostgresqlConfig" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_postgresql.ManagedDatabasePostgresqlConfig;

ManagedDatabasePostgresqlConfig.builder()
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
//  .maintenanceWindowDow(java.lang.String)
//  .maintenanceWindowTime(java.lang.String)
//  .network(IResolvable)
//  .network(java.util.List<ManagedDatabasePostgresqlNetwork>)
//  .powered(java.lang.Boolean)
//  .powered(IResolvable)
//  .properties(ManagedDatabasePostgresqlProperties)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.plan">plan</a></code> | <code>java.lang.String</code> | Service plan to use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.title">title</a></code> | <code>java.lang.String</code> | Title of a managed database instance. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#id ManagedDatabasePostgresql#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.maintenanceWindowDow">maintenanceWindowDow</a></code> | <code>java.lang.String</code> | Maintenance window day of week. Lower case weekday name (monday, tuesday, ...). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.maintenanceWindowTime">maintenanceWindowTime</a></code> | <code>java.lang.String</code> | Maintenance window UTC time in hh:mm:ss format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.network">network</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork">ManagedDatabasePostgresqlNetwork</a>></code> | network block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.powered">powered</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The administrative power state of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a></code> | properties block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the service.

The name is used as a prefix for the logical hostname. Must be unique within an account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#name ManagedDatabasePostgresql#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.plan"></a>

```java
public java.lang.String getPlan();
```

- *Type:* java.lang.String

Service plan to use.

This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#plan ManagedDatabasePostgresql#plan}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Title of a managed database instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#title ManagedDatabasePostgresql#title}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#zone ManagedDatabasePostgresql#zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#id ManagedDatabasePostgresql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceWindowDow`<sup>Optional</sup> <a name="maintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.maintenanceWindowDow"></a>

```java
public java.lang.String getMaintenanceWindowDow();
```

- *Type:* java.lang.String

Maintenance window day of week. Lower case weekday name (monday, tuesday, ...).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#maintenance_window_dow ManagedDatabasePostgresql#maintenance_window_dow}

---

##### `maintenanceWindowTime`<sup>Optional</sup> <a name="maintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.maintenanceWindowTime"></a>

```java
public java.lang.String getMaintenanceWindowTime();
```

- *Type:* java.lang.String

Maintenance window UTC time in hh:mm:ss format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#maintenance_window_time ManagedDatabasePostgresql#maintenance_window_time}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.network"></a>

```java
public java.lang.Object getNetwork();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork">ManagedDatabasePostgresqlNetwork</a>>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#network ManagedDatabasePostgresql#network}

---

##### `powered`<sup>Optional</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.powered"></a>

```java
public java.lang.Object getPowered();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The administrative power state of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#powered ManagedDatabasePostgresql#powered}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.properties"></a>

```java
public ManagedDatabasePostgresqlProperties getProperties();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#properties ManagedDatabasePostgresql#properties}

---

### ManagedDatabasePostgresqlNetwork <a name="ManagedDatabasePostgresqlNetwork" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_postgresql.ManagedDatabasePostgresqlNetwork;

ManagedDatabasePostgresqlNetwork.builder()
    .family(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
    .uuid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork.property.family">family</a></code> | <code>java.lang.String</code> | Network family. Currently only `IPv4` is supported. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork.property.name">name</a></code> | <code>java.lang.String</code> | The name of the network. Must be unique within the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork.property.type">type</a></code> | <code>java.lang.String</code> | The type of the network. Must be private. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork.property.uuid">uuid</a></code> | <code>java.lang.String</code> | Private network UUID. Must reside in the same zone as the database. |

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

Network family. Currently only `IPv4` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#family ManagedDatabasePostgresql#family}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the network. Must be unique within the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#name ManagedDatabasePostgresql#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the network. Must be private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#type ManagedDatabasePostgresql#type}

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

Private network UUID. Must reside in the same zone as the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#uuid ManagedDatabasePostgresql#uuid}

---

### ManagedDatabasePostgresqlNodeStates <a name="ManagedDatabasePostgresqlNodeStates" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_postgresql.ManagedDatabasePostgresqlNodeStates;

ManagedDatabasePostgresqlNodeStates.builder()
    .build();
```


### ManagedDatabasePostgresqlProperties <a name="ManagedDatabasePostgresqlProperties" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_postgresql.ManagedDatabasePostgresqlProperties;

ManagedDatabasePostgresqlProperties.builder()
//  .adminPassword(java.lang.String)
//  .adminUsername(java.lang.String)
//  .automaticUtilityNetworkIpFilter(java.lang.Boolean)
//  .automaticUtilityNetworkIpFilter(IResolvable)
//  .autovacuumAnalyzeScaleFactor(java.lang.Number)
//  .autovacuumAnalyzeThreshold(java.lang.Number)
//  .autovacuumFreezeMaxAge(java.lang.Number)
//  .autovacuumMaxWorkers(java.lang.Number)
//  .autovacuumNaptime(java.lang.Number)
//  .autovacuumVacuumCostDelay(java.lang.Number)
//  .autovacuumVacuumCostLimit(java.lang.Number)
//  .autovacuumVacuumScaleFactor(java.lang.Number)
//  .autovacuumVacuumThreshold(java.lang.Number)
//  .backupHour(java.lang.Number)
//  .backupMinute(java.lang.Number)
//  .bgwriterDelay(java.lang.Number)
//  .bgwriterFlushAfter(java.lang.Number)
//  .bgwriterLruMaxpages(java.lang.Number)
//  .bgwriterLruMultiplier(java.lang.Number)
//  .deadlockTimeout(java.lang.Number)
//  .defaultToastCompression(java.lang.String)
//  .idleInTransactionSessionTimeout(java.lang.Number)
//  .ipFilter(java.util.List<java.lang.String>)
//  .jit(java.lang.Boolean)
//  .jit(IResolvable)
//  .logAutovacuumMinDuration(java.lang.Number)
//  .logErrorVerbosity(java.lang.String)
//  .logLinePrefix(java.lang.String)
//  .logMinDurationStatement(java.lang.Number)
//  .logTempFiles(java.lang.Number)
//  .maxFilesPerProcess(java.lang.Number)
//  .maxLocksPerTransaction(java.lang.Number)
//  .maxLogicalReplicationWorkers(java.lang.Number)
//  .maxParallelWorkers(java.lang.Number)
//  .maxParallelWorkersPerGather(java.lang.Number)
//  .maxPredLocksPerTransaction(java.lang.Number)
//  .maxPreparedTransactions(java.lang.Number)
//  .maxReplicationSlots(java.lang.Number)
//  .maxSlotWalKeepSize(java.lang.Number)
//  .maxStackDepth(java.lang.Number)
//  .maxStandbyArchiveDelay(java.lang.Number)
//  .maxStandbyStreamingDelay(java.lang.Number)
//  .maxWalSenders(java.lang.Number)
//  .maxWorkerProcesses(java.lang.Number)
//  .migration(ManagedDatabasePostgresqlPropertiesMigration)
//  .pgaudit(ManagedDatabasePostgresqlPropertiesPgaudit)
//  .pgbouncer(ManagedDatabasePostgresqlPropertiesPgbouncer)
//  .pglookout(ManagedDatabasePostgresqlPropertiesPglookout)
//  .pgPartmanBgwInterval(java.lang.Number)
//  .pgPartmanBgwRole(java.lang.String)
//  .pgStatMonitorEnable(java.lang.Boolean)
//  .pgStatMonitorEnable(IResolvable)
//  .pgStatMonitorPgsmEnableQueryPlan(java.lang.Boolean)
//  .pgStatMonitorPgsmEnableQueryPlan(IResolvable)
//  .pgStatMonitorPgsmMaxBuckets(java.lang.Number)
//  .pgStatStatementsTrack(java.lang.String)
//  .publicAccess(java.lang.Boolean)
//  .publicAccess(IResolvable)
//  .serviceLog(java.lang.Boolean)
//  .serviceLog(IResolvable)
//  .sharedBuffersPercentage(java.lang.Number)
//  .synchronousReplication(java.lang.String)
//  .tempFileLimit(java.lang.Number)
//  .timescaledb(ManagedDatabasePostgresqlPropertiesTimescaledb)
//  .timezone(java.lang.String)
//  .trackActivityQuerySize(java.lang.Number)
//  .trackCommitTimestamp(java.lang.String)
//  .trackFunctions(java.lang.String)
//  .trackIoTiming(java.lang.String)
//  .variant(java.lang.String)
//  .version(java.lang.String)
//  .walSenderTimeout(java.lang.Number)
//  .walWriterDelay(java.lang.Number)
//  .workMem(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | Custom password for admin user. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | Custom username for admin user. This must be set only when a new service is being created. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.automaticUtilityNetworkIpFilter">automaticUtilityNetworkIpFilter</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumAnalyzeScaleFactor">autovacuumAnalyzeScaleFactor</a></code> | <code>java.lang.Number</code> | Specifies a fraction of the table size to add to autovacuum_analyze_threshold when deciding whether to trigger an ANALYZE. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumAnalyzeThreshold">autovacuumAnalyzeThreshold</a></code> | <code>java.lang.Number</code> | Specifies the minimum number of inserted, updated or deleted tuples needed to trigger an ANALYZE in any one table. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumFreezeMaxAge">autovacuumFreezeMaxAge</a></code> | <code>java.lang.Number</code> | Specifies the maximum age (in transactions) that a table's pg_class.relfrozenxid field can attain before a VACUUM operation is forced to prevent transaction ID wraparound within the table. Note that the system will launch autovacuum processes to prevent wraparound even when autovacuum is otherwise disabled. This parameter will cause the server to be restarted. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumMaxWorkers">autovacuumMaxWorkers</a></code> | <code>java.lang.Number</code> | Specifies the maximum number of autovacuum processes (other than the autovacuum launcher) that may be running at any one time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumNaptime">autovacuumNaptime</a></code> | <code>java.lang.Number</code> | Specifies the minimum delay between autovacuum runs on any given database. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumCostDelay">autovacuumVacuumCostDelay</a></code> | <code>java.lang.Number</code> | Specifies the cost delay value that will be used in automatic VACUUM operations. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumCostLimit">autovacuumVacuumCostLimit</a></code> | <code>java.lang.Number</code> | Specifies the cost limit value that will be used in automatic VACUUM operations. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumScaleFactor">autovacuumVacuumScaleFactor</a></code> | <code>java.lang.Number</code> | Specifies a fraction of the table size to add to autovacuum_vacuum_threshold when deciding whether to trigger a VACUUM. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumThreshold">autovacuumVacuumThreshold</a></code> | <code>java.lang.Number</code> | Specifies the minimum number of updated or deleted tuples needed to trigger a VACUUM in any one table. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.backupHour">backupHour</a></code> | <code>java.lang.Number</code> | The hour of day (in UTC) when backup for the service is started. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.backupMinute">backupMinute</a></code> | <code>java.lang.Number</code> | The minute of an hour when backup for the service is started. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterDelay">bgwriterDelay</a></code> | <code>java.lang.Number</code> | Specifies the delay between activity rounds for the background writer in milliseconds. Default is 200. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterFlushAfter">bgwriterFlushAfter</a></code> | <code>java.lang.Number</code> | Whenever more than bgwriter_flush_after bytes have been written by the background writer, attempt to force the OS to issue these writes to the underlying storage. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterLruMaxpages">bgwriterLruMaxpages</a></code> | <code>java.lang.Number</code> | In each round, no more than this many buffers will be written by the background writer. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterLruMultiplier">bgwriterLruMultiplier</a></code> | <code>java.lang.Number</code> | The average recent need for new buffers is multiplied by bgwriter_lru_multiplier to arrive at an estimate of the number that will be needed during the next round, (up to bgwriter_lru_maxpages). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.deadlockTimeout">deadlockTimeout</a></code> | <code>java.lang.Number</code> | This is the amount of time, in milliseconds, to wait on a lock before checking to see if there is a deadlock condition. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.defaultToastCompression">defaultToastCompression</a></code> | <code>java.lang.String</code> | Specifies the default TOAST compression method for values of compressible columns (the default is lz4). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.idleInTransactionSessionTimeout">idleInTransactionSessionTimeout</a></code> | <code>java.lang.Number</code> | Time out sessions with open transactions after this number of milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.ipFilter">ipFilter</a></code> | <code>java.util.List<java.lang.String></code> | IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.jit">jit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls system-wide use of Just-in-Time Compilation (JIT). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logAutovacuumMinDuration">logAutovacuumMinDuration</a></code> | <code>java.lang.Number</code> | Causes each action executed by autovacuum to be logged if it ran for at least the specified number of milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logErrorVerbosity">logErrorVerbosity</a></code> | <code>java.lang.String</code> | Controls the amount of detail written in the server log for each message that is logged. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logLinePrefix">logLinePrefix</a></code> | <code>java.lang.String</code> | Choose from one of the available log-formats. These can support popular log analyzers like pgbadger, pganalyze etc. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logMinDurationStatement">logMinDurationStatement</a></code> | <code>java.lang.Number</code> | Log statements that take more than this number of milliseconds to run, -1 disables. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logTempFiles">logTempFiles</a></code> | <code>java.lang.Number</code> | Log statements for each temporary file created larger than this number of kilobytes, -1 disables. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxFilesPerProcess">maxFilesPerProcess</a></code> | <code>java.lang.Number</code> | PostgreSQL maximum number of files that can be open per process. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxLocksPerTransaction">maxLocksPerTransaction</a></code> | <code>java.lang.Number</code> | PostgreSQL maximum locks per transaction. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxLogicalReplicationWorkers">maxLogicalReplicationWorkers</a></code> | <code>java.lang.Number</code> | PostgreSQL maximum logical replication workers (taken from the pool of max_parallel_workers). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxParallelWorkers">maxParallelWorkers</a></code> | <code>java.lang.Number</code> | Sets the maximum number of workers that the system can support for parallel queries. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxParallelWorkersPerGather">maxParallelWorkersPerGather</a></code> | <code>java.lang.Number</code> | Sets the maximum number of workers that can be started by a single Gather or Gather Merge node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxPredLocksPerTransaction">maxPredLocksPerTransaction</a></code> | <code>java.lang.Number</code> | PostgreSQL maximum predicate locks per transaction. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxPreparedTransactions">maxPreparedTransactions</a></code> | <code>java.lang.Number</code> | PostgreSQL maximum prepared transactions. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxReplicationSlots">maxReplicationSlots</a></code> | <code>java.lang.Number</code> | PostgreSQL maximum replication slots. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxSlotWalKeepSize">maxSlotWalKeepSize</a></code> | <code>java.lang.Number</code> | PostgreSQL maximum WAL size (MB) reserved for replication slots. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStackDepth">maxStackDepth</a></code> | <code>java.lang.Number</code> | Maximum depth of the stack in bytes. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStandbyArchiveDelay">maxStandbyArchiveDelay</a></code> | <code>java.lang.Number</code> | Max standby archive delay in milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStandbyStreamingDelay">maxStandbyStreamingDelay</a></code> | <code>java.lang.Number</code> | Max standby streaming delay in milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxWalSenders">maxWalSenders</a></code> | <code>java.lang.Number</code> | PostgreSQL maximum WAL senders. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxWorkerProcesses">maxWorkerProcesses</a></code> | <code>java.lang.Number</code> | Sets the maximum number of background processes that the system can support. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.migration">migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a></code> | migration block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgaudit">pgaudit</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit">ManagedDatabasePostgresqlPropertiesPgaudit</a></code> | pgaudit block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgbouncer">pgbouncer</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a></code> | pgbouncer block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pglookout">pglookout</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a></code> | pglookout block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgPartmanBgwInterval">pgPartmanBgwInterval</a></code> | <code>java.lang.Number</code> | Sets the time interval to run pg_partman's scheduled tasks. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgPartmanBgwRole">pgPartmanBgwRole</a></code> | <code>java.lang.String</code> | Controls which role to use for pg_partman's scheduled background tasks. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorEnable">pgStatMonitorEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable pg_stat_monitor extension if available for the current cluster. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorPgsmEnableQueryPlan">pgStatMonitorPgsmEnableQueryPlan</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables or disables query plan monitoring. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorPgsmMaxBuckets">pgStatMonitorPgsmMaxBuckets</a></code> | <code>java.lang.Number</code> | Sets the maximum number of buckets. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatStatementsTrack">pgStatStatementsTrack</a></code> | <code>java.lang.String</code> | Controls which statements are counted. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.publicAccess">publicAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Public Access. Allow access to the service from the public Internet. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.serviceLog">serviceLog</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Service logging. Store logs for the service so that they are available in the HTTP API and console. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.sharedBuffersPercentage">sharedBuffersPercentage</a></code> | <code>java.lang.Number</code> | Percentage of total RAM that the database server uses for shared memory buffers. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.synchronousReplication">synchronousReplication</a></code> | <code>java.lang.String</code> | Synchronous replication type. Note that the service plan also needs to support synchronous replication. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.tempFileLimit">tempFileLimit</a></code> | <code>java.lang.Number</code> | PostgreSQL temporary file limit in KiB, -1 for unlimited. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.timescaledb">timescaledb</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a></code> | timescaledb block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.timezone">timezone</a></code> | <code>java.lang.String</code> | PostgreSQL service timezone. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackActivityQuerySize">trackActivityQuerySize</a></code> | <code>java.lang.Number</code> | Specifies the number of bytes reserved to track the currently executing command for each active session. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackCommitTimestamp">trackCommitTimestamp</a></code> | <code>java.lang.String</code> | Record commit time of transactions. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackFunctions">trackFunctions</a></code> | <code>java.lang.String</code> | Enables tracking of function call counts and time used. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackIoTiming">trackIoTiming</a></code> | <code>java.lang.String</code> | Enables timing of database I/O calls. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.variant">variant</a></code> | <code>java.lang.String</code> | Variant of the PostgreSQL service, may affect the features that are exposed by default. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.version">version</a></code> | <code>java.lang.String</code> | PostgreSQL major version. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.walSenderTimeout">walSenderTimeout</a></code> | <code>java.lang.Number</code> | Terminate replication connections that are inactive for longer than this amount of time, in milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.walWriterDelay">walWriterDelay</a></code> | <code>java.lang.Number</code> | WAL flush interval in milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.workMem">workMem</a></code> | <code>java.lang.Number</code> | Sets the maximum amount of memory to be used by a query operation (such as a sort or hash table) before writing to temporary disk files, in MB. |

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

Custom password for admin user.

Defaults to random string. This must be set only when a new service is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#admin_password ManagedDatabasePostgresql#admin_password}

---

##### `adminUsername`<sup>Optional</sup> <a name="adminUsername" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

Custom username for admin user. This must be set only when a new service is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#admin_username ManagedDatabasePostgresql#admin_username}

---

##### `automaticUtilityNetworkIpFilter`<sup>Optional</sup> <a name="automaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.automaticUtilityNetworkIpFilter"></a>

```java
public java.lang.Object getAutomaticUtilityNetworkIpFilter();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#automatic_utility_network_ip_filter ManagedDatabasePostgresql#automatic_utility_network_ip_filter}

---

##### `autovacuumAnalyzeScaleFactor`<sup>Optional</sup> <a name="autovacuumAnalyzeScaleFactor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumAnalyzeScaleFactor"></a>

```java
public java.lang.Number getAutovacuumAnalyzeScaleFactor();
```

- *Type:* java.lang.Number

Specifies a fraction of the table size to add to autovacuum_analyze_threshold when deciding whether to trigger an ANALYZE.

The default is 0.2 (20% of table size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#autovacuum_analyze_scale_factor ManagedDatabasePostgresql#autovacuum_analyze_scale_factor}

---

##### `autovacuumAnalyzeThreshold`<sup>Optional</sup> <a name="autovacuumAnalyzeThreshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumAnalyzeThreshold"></a>

```java
public java.lang.Number getAutovacuumAnalyzeThreshold();
```

- *Type:* java.lang.Number

Specifies the minimum number of inserted, updated or deleted tuples needed to trigger an ANALYZE in any one table.

The default is 50 tuples.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#autovacuum_analyze_threshold ManagedDatabasePostgresql#autovacuum_analyze_threshold}

---

##### `autovacuumFreezeMaxAge`<sup>Optional</sup> <a name="autovacuumFreezeMaxAge" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumFreezeMaxAge"></a>

```java
public java.lang.Number getAutovacuumFreezeMaxAge();
```

- *Type:* java.lang.Number

Specifies the maximum age (in transactions) that a table's pg_class.relfrozenxid field can attain before a VACUUM operation is forced to prevent transaction ID wraparound within the table. Note that the system will launch autovacuum processes to prevent wraparound even when autovacuum is otherwise disabled. This parameter will cause the server to be restarted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#autovacuum_freeze_max_age ManagedDatabasePostgresql#autovacuum_freeze_max_age}

---

##### `autovacuumMaxWorkers`<sup>Optional</sup> <a name="autovacuumMaxWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumMaxWorkers"></a>

```java
public java.lang.Number getAutovacuumMaxWorkers();
```

- *Type:* java.lang.Number

Specifies the maximum number of autovacuum processes (other than the autovacuum launcher) that may be running at any one time.

The default is three. This parameter can only be set at server start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#autovacuum_max_workers ManagedDatabasePostgresql#autovacuum_max_workers}

---

##### `autovacuumNaptime`<sup>Optional</sup> <a name="autovacuumNaptime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumNaptime"></a>

```java
public java.lang.Number getAutovacuumNaptime();
```

- *Type:* java.lang.Number

Specifies the minimum delay between autovacuum runs on any given database.

The delay is measured in seconds, and the default is one minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#autovacuum_naptime ManagedDatabasePostgresql#autovacuum_naptime}

---

##### `autovacuumVacuumCostDelay`<sup>Optional</sup> <a name="autovacuumVacuumCostDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumCostDelay"></a>

```java
public java.lang.Number getAutovacuumVacuumCostDelay();
```

- *Type:* java.lang.Number

Specifies the cost delay value that will be used in automatic VACUUM operations.

If -1 is specified, the regular vacuum_cost_delay value will be used. The default value is 20 milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#autovacuum_vacuum_cost_delay ManagedDatabasePostgresql#autovacuum_vacuum_cost_delay}

---

##### `autovacuumVacuumCostLimit`<sup>Optional</sup> <a name="autovacuumVacuumCostLimit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumCostLimit"></a>

```java
public java.lang.Number getAutovacuumVacuumCostLimit();
```

- *Type:* java.lang.Number

Specifies the cost limit value that will be used in automatic VACUUM operations.

If -1 is specified (which is the default), the regular vacuum_cost_limit value will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#autovacuum_vacuum_cost_limit ManagedDatabasePostgresql#autovacuum_vacuum_cost_limit}

---

##### `autovacuumVacuumScaleFactor`<sup>Optional</sup> <a name="autovacuumVacuumScaleFactor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumScaleFactor"></a>

```java
public java.lang.Number getAutovacuumVacuumScaleFactor();
```

- *Type:* java.lang.Number

Specifies a fraction of the table size to add to autovacuum_vacuum_threshold when deciding whether to trigger a VACUUM.

The default is 0.2 (20% of table size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#autovacuum_vacuum_scale_factor ManagedDatabasePostgresql#autovacuum_vacuum_scale_factor}

---

##### `autovacuumVacuumThreshold`<sup>Optional</sup> <a name="autovacuumVacuumThreshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumThreshold"></a>

```java
public java.lang.Number getAutovacuumVacuumThreshold();
```

- *Type:* java.lang.Number

Specifies the minimum number of updated or deleted tuples needed to trigger a VACUUM in any one table.

The default is 50 tuples.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#autovacuum_vacuum_threshold ManagedDatabasePostgresql#autovacuum_vacuum_threshold}

---

##### `backupHour`<sup>Optional</sup> <a name="backupHour" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.backupHour"></a>

```java
public java.lang.Number getBackupHour();
```

- *Type:* java.lang.Number

The hour of day (in UTC) when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#backup_hour ManagedDatabasePostgresql#backup_hour}

---

##### `backupMinute`<sup>Optional</sup> <a name="backupMinute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.backupMinute"></a>

```java
public java.lang.Number getBackupMinute();
```

- *Type:* java.lang.Number

The minute of an hour when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#backup_minute ManagedDatabasePostgresql#backup_minute}

---

##### `bgwriterDelay`<sup>Optional</sup> <a name="bgwriterDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterDelay"></a>

```java
public java.lang.Number getBgwriterDelay();
```

- *Type:* java.lang.Number

Specifies the delay between activity rounds for the background writer in milliseconds. Default is 200.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#bgwriter_delay ManagedDatabasePostgresql#bgwriter_delay}

---

##### `bgwriterFlushAfter`<sup>Optional</sup> <a name="bgwriterFlushAfter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterFlushAfter"></a>

```java
public java.lang.Number getBgwriterFlushAfter();
```

- *Type:* java.lang.Number

Whenever more than bgwriter_flush_after bytes have been written by the background writer, attempt to force the OS to issue these writes to the underlying storage.

Specified in kilobytes, default is 512. Setting of 0 disables forced writeback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#bgwriter_flush_after ManagedDatabasePostgresql#bgwriter_flush_after}

---

##### `bgwriterLruMaxpages`<sup>Optional</sup> <a name="bgwriterLruMaxpages" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterLruMaxpages"></a>

```java
public java.lang.Number getBgwriterLruMaxpages();
```

- *Type:* java.lang.Number

In each round, no more than this many buffers will be written by the background writer.

Setting this to zero disables background writing. Default is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#bgwriter_lru_maxpages ManagedDatabasePostgresql#bgwriter_lru_maxpages}

---

##### `bgwriterLruMultiplier`<sup>Optional</sup> <a name="bgwriterLruMultiplier" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterLruMultiplier"></a>

```java
public java.lang.Number getBgwriterLruMultiplier();
```

- *Type:* java.lang.Number

The average recent need for new buffers is multiplied by bgwriter_lru_multiplier to arrive at an estimate of the number that will be needed during the next round, (up to bgwriter_lru_maxpages).

1.0 represents a “just in time” policy of writing exactly the number of buffers predicted to be needed. Larger values provide some cushion against spikes in demand, while smaller values intentionally leave writes to be done by server processes. The default is 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#bgwriter_lru_multiplier ManagedDatabasePostgresql#bgwriter_lru_multiplier}

---

##### `deadlockTimeout`<sup>Optional</sup> <a name="deadlockTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.deadlockTimeout"></a>

```java
public java.lang.Number getDeadlockTimeout();
```

- *Type:* java.lang.Number

This is the amount of time, in milliseconds, to wait on a lock before checking to see if there is a deadlock condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#deadlock_timeout ManagedDatabasePostgresql#deadlock_timeout}

---

##### `defaultToastCompression`<sup>Optional</sup> <a name="defaultToastCompression" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.defaultToastCompression"></a>

```java
public java.lang.String getDefaultToastCompression();
```

- *Type:* java.lang.String

Specifies the default TOAST compression method for values of compressible columns (the default is lz4).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#default_toast_compression ManagedDatabasePostgresql#default_toast_compression}

---

##### `idleInTransactionSessionTimeout`<sup>Optional</sup> <a name="idleInTransactionSessionTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.idleInTransactionSessionTimeout"></a>

```java
public java.lang.Number getIdleInTransactionSessionTimeout();
```

- *Type:* java.lang.Number

Time out sessions with open transactions after this number of milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#idle_in_transaction_session_timeout ManagedDatabasePostgresql#idle_in_transaction_session_timeout}

---

##### `ipFilter`<sup>Optional</sup> <a name="ipFilter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.ipFilter"></a>

```java
public java.util.List<java.lang.String> getIpFilter();
```

- *Type:* java.util.List<java.lang.String>

IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#ip_filter ManagedDatabasePostgresql#ip_filter}

---

##### `jit`<sup>Optional</sup> <a name="jit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.jit"></a>

```java
public java.lang.Object getJit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls system-wide use of Just-in-Time Compilation (JIT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#jit ManagedDatabasePostgresql#jit}

---

##### `logAutovacuumMinDuration`<sup>Optional</sup> <a name="logAutovacuumMinDuration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logAutovacuumMinDuration"></a>

```java
public java.lang.Number getLogAutovacuumMinDuration();
```

- *Type:* java.lang.Number

Causes each action executed by autovacuum to be logged if it ran for at least the specified number of milliseconds.

Setting this to zero logs all autovacuum actions. Minus-one (the default) disables logging autovacuum actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#log_autovacuum_min_duration ManagedDatabasePostgresql#log_autovacuum_min_duration}

---

##### `logErrorVerbosity`<sup>Optional</sup> <a name="logErrorVerbosity" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logErrorVerbosity"></a>

```java
public java.lang.String getLogErrorVerbosity();
```

- *Type:* java.lang.String

Controls the amount of detail written in the server log for each message that is logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#log_error_verbosity ManagedDatabasePostgresql#log_error_verbosity}

---

##### `logLinePrefix`<sup>Optional</sup> <a name="logLinePrefix" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logLinePrefix"></a>

```java
public java.lang.String getLogLinePrefix();
```

- *Type:* java.lang.String

Choose from one of the available log-formats. These can support popular log analyzers like pgbadger, pganalyze etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#log_line_prefix ManagedDatabasePostgresql#log_line_prefix}

---

##### `logMinDurationStatement`<sup>Optional</sup> <a name="logMinDurationStatement" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logMinDurationStatement"></a>

```java
public java.lang.Number getLogMinDurationStatement();
```

- *Type:* java.lang.Number

Log statements that take more than this number of milliseconds to run, -1 disables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#log_min_duration_statement ManagedDatabasePostgresql#log_min_duration_statement}

---

##### `logTempFiles`<sup>Optional</sup> <a name="logTempFiles" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logTempFiles"></a>

```java
public java.lang.Number getLogTempFiles();
```

- *Type:* java.lang.Number

Log statements for each temporary file created larger than this number of kilobytes, -1 disables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#log_temp_files ManagedDatabasePostgresql#log_temp_files}

---

##### `maxFilesPerProcess`<sup>Optional</sup> <a name="maxFilesPerProcess" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxFilesPerProcess"></a>

```java
public java.lang.Number getMaxFilesPerProcess();
```

- *Type:* java.lang.Number

PostgreSQL maximum number of files that can be open per process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#max_files_per_process ManagedDatabasePostgresql#max_files_per_process}

---

##### `maxLocksPerTransaction`<sup>Optional</sup> <a name="maxLocksPerTransaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxLocksPerTransaction"></a>

```java
public java.lang.Number getMaxLocksPerTransaction();
```

- *Type:* java.lang.Number

PostgreSQL maximum locks per transaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#max_locks_per_transaction ManagedDatabasePostgresql#max_locks_per_transaction}

---

##### `maxLogicalReplicationWorkers`<sup>Optional</sup> <a name="maxLogicalReplicationWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxLogicalReplicationWorkers"></a>

```java
public java.lang.Number getMaxLogicalReplicationWorkers();
```

- *Type:* java.lang.Number

PostgreSQL maximum logical replication workers (taken from the pool of max_parallel_workers).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#max_logical_replication_workers ManagedDatabasePostgresql#max_logical_replication_workers}

---

##### `maxParallelWorkers`<sup>Optional</sup> <a name="maxParallelWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxParallelWorkers"></a>

```java
public java.lang.Number getMaxParallelWorkers();
```

- *Type:* java.lang.Number

Sets the maximum number of workers that the system can support for parallel queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#max_parallel_workers ManagedDatabasePostgresql#max_parallel_workers}

---

##### `maxParallelWorkersPerGather`<sup>Optional</sup> <a name="maxParallelWorkersPerGather" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxParallelWorkersPerGather"></a>

```java
public java.lang.Number getMaxParallelWorkersPerGather();
```

- *Type:* java.lang.Number

Sets the maximum number of workers that can be started by a single Gather or Gather Merge node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#max_parallel_workers_per_gather ManagedDatabasePostgresql#max_parallel_workers_per_gather}

---

##### `maxPredLocksPerTransaction`<sup>Optional</sup> <a name="maxPredLocksPerTransaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxPredLocksPerTransaction"></a>

```java
public java.lang.Number getMaxPredLocksPerTransaction();
```

- *Type:* java.lang.Number

PostgreSQL maximum predicate locks per transaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#max_pred_locks_per_transaction ManagedDatabasePostgresql#max_pred_locks_per_transaction}

---

##### `maxPreparedTransactions`<sup>Optional</sup> <a name="maxPreparedTransactions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxPreparedTransactions"></a>

```java
public java.lang.Number getMaxPreparedTransactions();
```

- *Type:* java.lang.Number

PostgreSQL maximum prepared transactions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#max_prepared_transactions ManagedDatabasePostgresql#max_prepared_transactions}

---

##### `maxReplicationSlots`<sup>Optional</sup> <a name="maxReplicationSlots" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxReplicationSlots"></a>

```java
public java.lang.Number getMaxReplicationSlots();
```

- *Type:* java.lang.Number

PostgreSQL maximum replication slots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#max_replication_slots ManagedDatabasePostgresql#max_replication_slots}

---

##### `maxSlotWalKeepSize`<sup>Optional</sup> <a name="maxSlotWalKeepSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxSlotWalKeepSize"></a>

```java
public java.lang.Number getMaxSlotWalKeepSize();
```

- *Type:* java.lang.Number

PostgreSQL maximum WAL size (MB) reserved for replication slots.

Default is -1 (unlimited). wal_keep_size minimum WAL size setting takes precedence over this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#max_slot_wal_keep_size ManagedDatabasePostgresql#max_slot_wal_keep_size}

---

##### `maxStackDepth`<sup>Optional</sup> <a name="maxStackDepth" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStackDepth"></a>

```java
public java.lang.Number getMaxStackDepth();
```

- *Type:* java.lang.Number

Maximum depth of the stack in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#max_stack_depth ManagedDatabasePostgresql#max_stack_depth}

---

##### `maxStandbyArchiveDelay`<sup>Optional</sup> <a name="maxStandbyArchiveDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStandbyArchiveDelay"></a>

```java
public java.lang.Number getMaxStandbyArchiveDelay();
```

- *Type:* java.lang.Number

Max standby archive delay in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#max_standby_archive_delay ManagedDatabasePostgresql#max_standby_archive_delay}

---

##### `maxStandbyStreamingDelay`<sup>Optional</sup> <a name="maxStandbyStreamingDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStandbyStreamingDelay"></a>

```java
public java.lang.Number getMaxStandbyStreamingDelay();
```

- *Type:* java.lang.Number

Max standby streaming delay in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#max_standby_streaming_delay ManagedDatabasePostgresql#max_standby_streaming_delay}

---

##### `maxWalSenders`<sup>Optional</sup> <a name="maxWalSenders" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxWalSenders"></a>

```java
public java.lang.Number getMaxWalSenders();
```

- *Type:* java.lang.Number

PostgreSQL maximum WAL senders.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#max_wal_senders ManagedDatabasePostgresql#max_wal_senders}

---

##### `maxWorkerProcesses`<sup>Optional</sup> <a name="maxWorkerProcesses" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxWorkerProcesses"></a>

```java
public java.lang.Number getMaxWorkerProcesses();
```

- *Type:* java.lang.Number

Sets the maximum number of background processes that the system can support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#max_worker_processes ManagedDatabasePostgresql#max_worker_processes}

---

##### `migration`<sup>Optional</sup> <a name="migration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.migration"></a>

```java
public ManagedDatabasePostgresqlPropertiesMigration getMigration();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a>

migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#migration ManagedDatabasePostgresql#migration}

---

##### `pgaudit`<sup>Optional</sup> <a name="pgaudit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgaudit"></a>

```java
public ManagedDatabasePostgresqlPropertiesPgaudit getPgaudit();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit">ManagedDatabasePostgresqlPropertiesPgaudit</a>

pgaudit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#pgaudit ManagedDatabasePostgresql#pgaudit}

---

##### `pgbouncer`<sup>Optional</sup> <a name="pgbouncer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgbouncer"></a>

```java
public ManagedDatabasePostgresqlPropertiesPgbouncer getPgbouncer();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a>

pgbouncer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#pgbouncer ManagedDatabasePostgresql#pgbouncer}

---

##### `pglookout`<sup>Optional</sup> <a name="pglookout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pglookout"></a>

```java
public ManagedDatabasePostgresqlPropertiesPglookout getPglookout();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a>

pglookout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#pglookout ManagedDatabasePostgresql#pglookout}

---

##### `pgPartmanBgwInterval`<sup>Optional</sup> <a name="pgPartmanBgwInterval" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgPartmanBgwInterval"></a>

```java
public java.lang.Number getPgPartmanBgwInterval();
```

- *Type:* java.lang.Number

Sets the time interval to run pg_partman's scheduled tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#pg_partman_bgw_interval ManagedDatabasePostgresql#pg_partman_bgw_interval}

---

##### `pgPartmanBgwRole`<sup>Optional</sup> <a name="pgPartmanBgwRole" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgPartmanBgwRole"></a>

```java
public java.lang.String getPgPartmanBgwRole();
```

- *Type:* java.lang.String

Controls which role to use for pg_partman's scheduled background tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#pg_partman_bgw_role ManagedDatabasePostgresql#pg_partman_bgw_role}

---

##### `pgStatMonitorEnable`<sup>Optional</sup> <a name="pgStatMonitorEnable" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorEnable"></a>

```java
public java.lang.Object getPgStatMonitorEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable pg_stat_monitor extension if available for the current cluster.

Enable the pg_stat_monitor extension. Enabling this extension will cause the cluster to be restarted.When this extension is enabled, pg_stat_statements results for utility commands are unreliable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#pg_stat_monitor_enable ManagedDatabasePostgresql#pg_stat_monitor_enable}

---

##### `pgStatMonitorPgsmEnableQueryPlan`<sup>Optional</sup> <a name="pgStatMonitorPgsmEnableQueryPlan" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorPgsmEnableQueryPlan"></a>

```java
public java.lang.Object getPgStatMonitorPgsmEnableQueryPlan();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables or disables query plan monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#pg_stat_monitor_pgsm_enable_query_plan ManagedDatabasePostgresql#pg_stat_monitor_pgsm_enable_query_plan}

---

##### `pgStatMonitorPgsmMaxBuckets`<sup>Optional</sup> <a name="pgStatMonitorPgsmMaxBuckets" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorPgsmMaxBuckets"></a>

```java
public java.lang.Number getPgStatMonitorPgsmMaxBuckets();
```

- *Type:* java.lang.Number

Sets the maximum number of buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#pg_stat_monitor_pgsm_max_buckets ManagedDatabasePostgresql#pg_stat_monitor_pgsm_max_buckets}

---

##### `pgStatStatementsTrack`<sup>Optional</sup> <a name="pgStatStatementsTrack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatStatementsTrack"></a>

```java
public java.lang.String getPgStatStatementsTrack();
```

- *Type:* java.lang.String

Controls which statements are counted.

Specify top to track top-level statements (those issued directly by clients), all to also track nested statements (such as statements invoked within functions), or none to disable statement statistics collection. The default value is top.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#pg_stat_statements_track ManagedDatabasePostgresql#pg_stat_statements_track}

---

##### `publicAccess`<sup>Optional</sup> <a name="publicAccess" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.publicAccess"></a>

```java
public java.lang.Object getPublicAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Public Access. Allow access to the service from the public Internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#public_access ManagedDatabasePostgresql#public_access}

---

##### `serviceLog`<sup>Optional</sup> <a name="serviceLog" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.serviceLog"></a>

```java
public java.lang.Object getServiceLog();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Service logging. Store logs for the service so that they are available in the HTTP API and console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#service_log ManagedDatabasePostgresql#service_log}

---

##### `sharedBuffersPercentage`<sup>Optional</sup> <a name="sharedBuffersPercentage" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.sharedBuffersPercentage"></a>

```java
public java.lang.Number getSharedBuffersPercentage();
```

- *Type:* java.lang.Number

Percentage of total RAM that the database server uses for shared memory buffers.

Valid range is 20-60 (float), which corresponds to 20% - 60%. This setting adjusts the shared_buffers configuration value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#shared_buffers_percentage ManagedDatabasePostgresql#shared_buffers_percentage}

---

##### `synchronousReplication`<sup>Optional</sup> <a name="synchronousReplication" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.synchronousReplication"></a>

```java
public java.lang.String getSynchronousReplication();
```

- *Type:* java.lang.String

Synchronous replication type. Note that the service plan also needs to support synchronous replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#synchronous_replication ManagedDatabasePostgresql#synchronous_replication}

---

##### `tempFileLimit`<sup>Optional</sup> <a name="tempFileLimit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.tempFileLimit"></a>

```java
public java.lang.Number getTempFileLimit();
```

- *Type:* java.lang.Number

PostgreSQL temporary file limit in KiB, -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#temp_file_limit ManagedDatabasePostgresql#temp_file_limit}

---

##### `timescaledb`<sup>Optional</sup> <a name="timescaledb" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.timescaledb"></a>

```java
public ManagedDatabasePostgresqlPropertiesTimescaledb getTimescaledb();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a>

timescaledb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#timescaledb ManagedDatabasePostgresql#timescaledb}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

PostgreSQL service timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#timezone ManagedDatabasePostgresql#timezone}

---

##### `trackActivityQuerySize`<sup>Optional</sup> <a name="trackActivityQuerySize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackActivityQuerySize"></a>

```java
public java.lang.Number getTrackActivityQuerySize();
```

- *Type:* java.lang.Number

Specifies the number of bytes reserved to track the currently executing command for each active session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#track_activity_query_size ManagedDatabasePostgresql#track_activity_query_size}

---

##### `trackCommitTimestamp`<sup>Optional</sup> <a name="trackCommitTimestamp" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackCommitTimestamp"></a>

```java
public java.lang.String getTrackCommitTimestamp();
```

- *Type:* java.lang.String

Record commit time of transactions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#track_commit_timestamp ManagedDatabasePostgresql#track_commit_timestamp}

---

##### `trackFunctions`<sup>Optional</sup> <a name="trackFunctions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackFunctions"></a>

```java
public java.lang.String getTrackFunctions();
```

- *Type:* java.lang.String

Enables tracking of function call counts and time used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#track_functions ManagedDatabasePostgresql#track_functions}

---

##### `trackIoTiming`<sup>Optional</sup> <a name="trackIoTiming" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackIoTiming"></a>

```java
public java.lang.String getTrackIoTiming();
```

- *Type:* java.lang.String

Enables timing of database I/O calls.

This parameter is off by default, because it will repeatedly query the operating system for the current time, which may cause significant overhead on some platforms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#track_io_timing ManagedDatabasePostgresql#track_io_timing}

---

##### `variant`<sup>Optional</sup> <a name="variant" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.variant"></a>

```java
public java.lang.String getVariant();
```

- *Type:* java.lang.String

Variant of the PostgreSQL service, may affect the features that are exposed by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#variant ManagedDatabasePostgresql#variant}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

PostgreSQL major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#version ManagedDatabasePostgresql#version}

---

##### `walSenderTimeout`<sup>Optional</sup> <a name="walSenderTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.walSenderTimeout"></a>

```java
public java.lang.Number getWalSenderTimeout();
```

- *Type:* java.lang.Number

Terminate replication connections that are inactive for longer than this amount of time, in milliseconds.

Setting this value to zero disables the timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#wal_sender_timeout ManagedDatabasePostgresql#wal_sender_timeout}

---

##### `walWriterDelay`<sup>Optional</sup> <a name="walWriterDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.walWriterDelay"></a>

```java
public java.lang.Number getWalWriterDelay();
```

- *Type:* java.lang.Number

WAL flush interval in milliseconds.

Note that setting this value to lower than the default 200ms may negatively impact performance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#wal_writer_delay ManagedDatabasePostgresql#wal_writer_delay}

---

##### `workMem`<sup>Optional</sup> <a name="workMem" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.workMem"></a>

```java
public java.lang.Number getWorkMem();
```

- *Type:* java.lang.Number

Sets the maximum amount of memory to be used by a query operation (such as a sort or hash table) before writing to temporary disk files, in MB.

Default is 1MB + 0.075% of total RAM (up to 32MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#work_mem ManagedDatabasePostgresql#work_mem}

---

### ManagedDatabasePostgresqlPropertiesMigration <a name="ManagedDatabasePostgresqlPropertiesMigration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_postgresql.ManagedDatabasePostgresqlPropertiesMigration;

ManagedDatabasePostgresqlPropertiesMigration.builder()
//  .dbname(java.lang.String)
//  .host(java.lang.String)
//  .ignoreDbs(java.lang.String)
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
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.dbname">dbname</a></code> | <code>java.lang.String</code> | Database name for bootstrapping the initial connection. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.host">host</a></code> | <code>java.lang.String</code> | Hostname or IP address of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.ignoreDbs">ignoreDbs</a></code> | <code>java.lang.String</code> | Comma-separated list of databases, which should be ignored during migration (supported by MySQL and PostgreSQL only at the moment). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.method">method</a></code> | <code>java.lang.String</code> | The migration method to be used (currently supported only by Redis, Dragonfly, MySQL and PostgreSQL service types). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.password">password</a></code> | <code>java.lang.String</code> | Password for authentication with the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.port">port</a></code> | <code>java.lang.Number</code> | Port number of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.ssl">ssl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The server where to migrate data from is secured with SSL. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.username">username</a></code> | <code>java.lang.String</code> | User name for authentication with the server where to migrate data from. |

---

##### `dbname`<sup>Optional</sup> <a name="dbname" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.dbname"></a>

```java
public java.lang.String getDbname();
```

- *Type:* java.lang.String

Database name for bootstrapping the initial connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#dbname ManagedDatabasePostgresql#dbname}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Hostname or IP address of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#host ManagedDatabasePostgresql#host}

---

##### `ignoreDbs`<sup>Optional</sup> <a name="ignoreDbs" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.ignoreDbs"></a>

```java
public java.lang.String getIgnoreDbs();
```

- *Type:* java.lang.String

Comma-separated list of databases, which should be ignored during migration (supported by MySQL and PostgreSQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#ignore_dbs ManagedDatabasePostgresql#ignore_dbs}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

The migration method to be used (currently supported only by Redis, Dragonfly, MySQL and PostgreSQL service types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#method ManagedDatabasePostgresql#method}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#password ManagedDatabasePostgresql#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Port number of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#port ManagedDatabasePostgresql#port}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.ssl"></a>

```java
public java.lang.Object getSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The server where to migrate data from is secured with SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#ssl ManagedDatabasePostgresql#ssl}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

User name for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#username ManagedDatabasePostgresql#username}

---

### ManagedDatabasePostgresqlPropertiesPgaudit <a name="ManagedDatabasePostgresqlPropertiesPgaudit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_postgresql.ManagedDatabasePostgresqlPropertiesPgaudit;

ManagedDatabasePostgresqlPropertiesPgaudit.builder()
//  .featureEnabled(java.lang.Boolean)
//  .featureEnabled(IResolvable)
//  .log(java.util.List<java.lang.String>)
//  .logCatalog(java.lang.Boolean)
//  .logCatalog(IResolvable)
//  .logClient(java.lang.Boolean)
//  .logClient(IResolvable)
//  .logLevel(java.lang.String)
//  .logMaxStringLength(java.lang.Number)
//  .logNestedStatements(java.lang.Boolean)
//  .logNestedStatements(IResolvable)
//  .logParameter(java.lang.Boolean)
//  .logParameter(IResolvable)
//  .logParameterMaxSize(java.lang.Number)
//  .logRelation(java.lang.Boolean)
//  .logRelation(IResolvable)
//  .logRows(java.lang.Boolean)
//  .logRows(IResolvable)
//  .logStatement(java.lang.Boolean)
//  .logStatement(IResolvable)
//  .logStatementOnce(java.lang.Boolean)
//  .logStatementOnce(IResolvable)
//  .role(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.featureEnabled">featureEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable pgaudit extension. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.log">log</a></code> | <code>java.util.List<java.lang.String></code> | Specifies which classes of statements will be logged by session audit logging. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logCatalog">logCatalog</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies that session logging should be enabled in the casewhere all relations in a statement are in pg_catalog. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logClient">logClient</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether log messages will be visible to a client process such as psql. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | Specifies the log level that will be used for log entries. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logMaxStringLength">logMaxStringLength</a></code> | <code>java.lang.Number</code> | Crop parameters representation and whole statements if they exceed this threshold. A (default) value of -1 disable the truncation. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logNestedStatements">logNestedStatements</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This GUC allows to turn off logging nested statements, that is, statements that are executed as part of another ExecutorRun. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logParameter">logParameter</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies that audit logging should include the parameters that were passed with the statement. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logParameterMaxSize">logParameterMaxSize</a></code> | <code>java.lang.Number</code> | Specifies that parameter values longer than this setting (in bytes) should not be logged, but replaced with <long param suppressed>. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logRelation">logRelation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether session audit logging should create a separate log entry for each relation (TABLE, VIEW, etc.) referenced in a SELECT or DML statement. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logRows">logRows</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies that audit logging should include the rows retrieved or affected by a statement. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logStatement">logStatement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether logging will include the statement text and parameters (if enabled). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logStatementOnce">logStatementOnce</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether logging will include the statement text and parameters with the first log entry for a statement/substatement combination or with every entry. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.role">role</a></code> | <code>java.lang.String</code> | Specifies the master role to use for object audit logging. |

---

##### `featureEnabled`<sup>Optional</sup> <a name="featureEnabled" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.featureEnabled"></a>

```java
public java.lang.Object getFeatureEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable pgaudit extension.

Enable pgaudit extension. When enabled, pgaudit extension will be automatically installed.Otherwise, extension will be uninstalled but auditing configurations will be preserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#feature_enabled ManagedDatabasePostgresql#feature_enabled}

---

##### `log`<sup>Optional</sup> <a name="log" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.log"></a>

```java
public java.util.List<java.lang.String> getLog();
```

- *Type:* java.util.List<java.lang.String>

Specifies which classes of statements will be logged by session audit logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#log ManagedDatabasePostgresql#log}

---

##### `logCatalog`<sup>Optional</sup> <a name="logCatalog" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logCatalog"></a>

```java
public java.lang.Object getLogCatalog();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies that session logging should be enabled in the casewhere all relations in a statement are in pg_catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#log_catalog ManagedDatabasePostgresql#log_catalog}

---

##### `logClient`<sup>Optional</sup> <a name="logClient" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logClient"></a>

```java
public java.lang.Object getLogClient();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether log messages will be visible to a client process such as psql.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#log_client ManagedDatabasePostgresql#log_client}

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

Specifies the log level that will be used for log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#log_level ManagedDatabasePostgresql#log_level}

---

##### `logMaxStringLength`<sup>Optional</sup> <a name="logMaxStringLength" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logMaxStringLength"></a>

```java
public java.lang.Number getLogMaxStringLength();
```

- *Type:* java.lang.Number

Crop parameters representation and whole statements if they exceed this threshold. A (default) value of -1 disable the truncation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#log_max_string_length ManagedDatabasePostgresql#log_max_string_length}

---

##### `logNestedStatements`<sup>Optional</sup> <a name="logNestedStatements" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logNestedStatements"></a>

```java
public java.lang.Object getLogNestedStatements();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This GUC allows to turn off logging nested statements, that is, statements that are executed as part of another ExecutorRun.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#log_nested_statements ManagedDatabasePostgresql#log_nested_statements}

---

##### `logParameter`<sup>Optional</sup> <a name="logParameter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logParameter"></a>

```java
public java.lang.Object getLogParameter();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies that audit logging should include the parameters that were passed with the statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#log_parameter ManagedDatabasePostgresql#log_parameter}

---

##### `logParameterMaxSize`<sup>Optional</sup> <a name="logParameterMaxSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logParameterMaxSize"></a>

```java
public java.lang.Number getLogParameterMaxSize();
```

- *Type:* java.lang.Number

Specifies that parameter values longer than this setting (in bytes) should not be logged, but replaced with <long param suppressed>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#log_parameter_max_size ManagedDatabasePostgresql#log_parameter_max_size}

---

##### `logRelation`<sup>Optional</sup> <a name="logRelation" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logRelation"></a>

```java
public java.lang.Object getLogRelation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether session audit logging should create a separate log entry for each relation (TABLE, VIEW, etc.) referenced in a SELECT or DML statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#log_relation ManagedDatabasePostgresql#log_relation}

---

##### `logRows`<sup>Optional</sup> <a name="logRows" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logRows"></a>

```java
public java.lang.Object getLogRows();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies that audit logging should include the rows retrieved or affected by a statement.

When enabled the rows field will be included after the parameter field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#log_rows ManagedDatabasePostgresql#log_rows}

---

##### `logStatement`<sup>Optional</sup> <a name="logStatement" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logStatement"></a>

```java
public java.lang.Object getLogStatement();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether logging will include the statement text and parameters (if enabled).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#log_statement ManagedDatabasePostgresql#log_statement}

---

##### `logStatementOnce`<sup>Optional</sup> <a name="logStatementOnce" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logStatementOnce"></a>

```java
public java.lang.Object getLogStatementOnce();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether logging will include the statement text and parameters with the first log entry for a statement/substatement combination or with every entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#log_statement_once ManagedDatabasePostgresql#log_statement_once}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Specifies the master role to use for object audit logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#role ManagedDatabasePostgresql#role}

---

### ManagedDatabasePostgresqlPropertiesPgbouncer <a name="ManagedDatabasePostgresqlPropertiesPgbouncer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_postgresql.ManagedDatabasePostgresqlPropertiesPgbouncer;

ManagedDatabasePostgresqlPropertiesPgbouncer.builder()
//  .autodbIdleTimeout(java.lang.Number)
//  .autodbMaxDbConnections(java.lang.Number)
//  .autodbPoolMode(java.lang.String)
//  .autodbPoolSize(java.lang.Number)
//  .ignoreStartupParameters(java.util.List<java.lang.String>)
//  .minPoolSize(java.lang.Number)
//  .serverIdleTimeout(java.lang.Number)
//  .serverLifetime(java.lang.Number)
//  .serverResetQueryAlways(java.lang.Boolean)
//  .serverResetQueryAlways(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbIdleTimeout">autodbIdleTimeout</a></code> | <code>java.lang.Number</code> | If the automatically created database pools have been unused this many seconds, they are freed. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbMaxDbConnections">autodbMaxDbConnections</a></code> | <code>java.lang.Number</code> | Do not allow more than this many server connections per database (regardless of user). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbPoolMode">autodbPoolMode</a></code> | <code>java.lang.String</code> | PGBouncer pool mode. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbPoolSize">autodbPoolSize</a></code> | <code>java.lang.Number</code> | If non-zero then create automatically a pool of that size per user when a pool doesn't exist. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.ignoreStartupParameters">ignoreStartupParameters</a></code> | <code>java.util.List<java.lang.String></code> | List of parameters to ignore when given in startup packet. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.minPoolSize">minPoolSize</a></code> | <code>java.lang.Number</code> | Add more server connections to pool if below this number. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverIdleTimeout">serverIdleTimeout</a></code> | <code>java.lang.Number</code> | If a server connection has been idle more than this many seconds it will be dropped. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverLifetime">serverLifetime</a></code> | <code>java.lang.Number</code> | The pooler will close an unused server connection that has been connected longer than this. [seconds]. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverResetQueryAlways">serverResetQueryAlways</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Run server_reset_query (DISCARD ALL) in all pooling modes. |

---

##### `autodbIdleTimeout`<sup>Optional</sup> <a name="autodbIdleTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbIdleTimeout"></a>

```java
public java.lang.Number getAutodbIdleTimeout();
```

- *Type:* java.lang.Number

If the automatically created database pools have been unused this many seconds, they are freed.

If 0 then timeout is disabled. [seconds].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#autodb_idle_timeout ManagedDatabasePostgresql#autodb_idle_timeout}

---

##### `autodbMaxDbConnections`<sup>Optional</sup> <a name="autodbMaxDbConnections" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbMaxDbConnections"></a>

```java
public java.lang.Number getAutodbMaxDbConnections();
```

- *Type:* java.lang.Number

Do not allow more than this many server connections per database (regardless of user).

Setting it to 0 means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#autodb_max_db_connections ManagedDatabasePostgresql#autodb_max_db_connections}

---

##### `autodbPoolMode`<sup>Optional</sup> <a name="autodbPoolMode" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbPoolMode"></a>

```java
public java.lang.String getAutodbPoolMode();
```

- *Type:* java.lang.String

PGBouncer pool mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#autodb_pool_mode ManagedDatabasePostgresql#autodb_pool_mode}

---

##### `autodbPoolSize`<sup>Optional</sup> <a name="autodbPoolSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbPoolSize"></a>

```java
public java.lang.Number getAutodbPoolSize();
```

- *Type:* java.lang.Number

If non-zero then create automatically a pool of that size per user when a pool doesn't exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#autodb_pool_size ManagedDatabasePostgresql#autodb_pool_size}

---

##### `ignoreStartupParameters`<sup>Optional</sup> <a name="ignoreStartupParameters" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.ignoreStartupParameters"></a>

```java
public java.util.List<java.lang.String> getIgnoreStartupParameters();
```

- *Type:* java.util.List<java.lang.String>

List of parameters to ignore when given in startup packet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#ignore_startup_parameters ManagedDatabasePostgresql#ignore_startup_parameters}

---

##### `minPoolSize`<sup>Optional</sup> <a name="minPoolSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.minPoolSize"></a>

```java
public java.lang.Number getMinPoolSize();
```

- *Type:* java.lang.Number

Add more server connections to pool if below this number.

Improves behavior when usual load comes suddenly back after period of total inactivity. The value is effectively capped at the pool size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#min_pool_size ManagedDatabasePostgresql#min_pool_size}

---

##### `serverIdleTimeout`<sup>Optional</sup> <a name="serverIdleTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverIdleTimeout"></a>

```java
public java.lang.Number getServerIdleTimeout();
```

- *Type:* java.lang.Number

If a server connection has been idle more than this many seconds it will be dropped.

If 0 then timeout is disabled. [seconds].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#server_idle_timeout ManagedDatabasePostgresql#server_idle_timeout}

---

##### `serverLifetime`<sup>Optional</sup> <a name="serverLifetime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverLifetime"></a>

```java
public java.lang.Number getServerLifetime();
```

- *Type:* java.lang.Number

The pooler will close an unused server connection that has been connected longer than this. [seconds].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#server_lifetime ManagedDatabasePostgresql#server_lifetime}

---

##### `serverResetQueryAlways`<sup>Optional</sup> <a name="serverResetQueryAlways" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverResetQueryAlways"></a>

```java
public java.lang.Object getServerResetQueryAlways();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Run server_reset_query (DISCARD ALL) in all pooling modes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#server_reset_query_always ManagedDatabasePostgresql#server_reset_query_always}

---

### ManagedDatabasePostgresqlPropertiesPglookout <a name="ManagedDatabasePostgresqlPropertiesPglookout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_postgresql.ManagedDatabasePostgresqlPropertiesPglookout;

ManagedDatabasePostgresqlPropertiesPglookout.builder()
//  .maxFailoverReplicationTimeLag(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout.property.maxFailoverReplicationTimeLag">maxFailoverReplicationTimeLag</a></code> | <code>java.lang.Number</code> | Number of seconds of master unavailability before triggering database failover to standby. |

---

##### `maxFailoverReplicationTimeLag`<sup>Optional</sup> <a name="maxFailoverReplicationTimeLag" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout.property.maxFailoverReplicationTimeLag"></a>

```java
public java.lang.Number getMaxFailoverReplicationTimeLag();
```

- *Type:* java.lang.Number

Number of seconds of master unavailability before triggering database failover to standby.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#max_failover_replication_time_lag ManagedDatabasePostgresql#max_failover_replication_time_lag}

---

### ManagedDatabasePostgresqlPropertiesTimescaledb <a name="ManagedDatabasePostgresqlPropertiesTimescaledb" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_postgresql.ManagedDatabasePostgresqlPropertiesTimescaledb;

ManagedDatabasePostgresqlPropertiesTimescaledb.builder()
//  .maxBackgroundWorkers(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb.property.maxBackgroundWorkers">maxBackgroundWorkers</a></code> | <code>java.lang.Number</code> | The number of background workers for timescaledb operations. |

---

##### `maxBackgroundWorkers`<sup>Optional</sup> <a name="maxBackgroundWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb.property.maxBackgroundWorkers"></a>

```java
public java.lang.Number getMaxBackgroundWorkers();
```

- *Type:* java.lang.Number

The number of background workers for timescaledb operations.

You should configure this setting to the sum of your number of databases and the total number of concurrent background workers you want running at any given point in time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.0/docs/resources/managed_database_postgresql#max_background_workers ManagedDatabasePostgresql#max_background_workers}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedDatabasePostgresqlComponentsList <a name="ManagedDatabasePostgresqlComponentsList" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_postgresql.ManagedDatabasePostgresqlComponentsList;

new ManagedDatabasePostgresqlComponentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.get"></a>

```java
public ManagedDatabasePostgresqlComponentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ManagedDatabasePostgresqlComponentsOutputReference <a name="ManagedDatabasePostgresqlComponentsOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_postgresql.ManagedDatabasePostgresqlComponentsOutputReference;

new ManagedDatabasePostgresqlComponentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.component">component</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.route">route</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.usage">usage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponents">ManagedDatabasePostgresqlComponents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.component"></a>

```java
public java.lang.String getComponent();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.route"></a>

```java
public java.lang.String getRoute();
```

- *Type:* java.lang.String

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.usage"></a>

```java
public java.lang.String getUsage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.internalValue"></a>

```java
public ManagedDatabasePostgresqlComponents getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponents">ManagedDatabasePostgresqlComponents</a>

---


### ManagedDatabasePostgresqlNetworkList <a name="ManagedDatabasePostgresqlNetworkList" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_postgresql.ManagedDatabasePostgresqlNetworkList;

new ManagedDatabasePostgresqlNetworkList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.get"></a>

```java
public ManagedDatabasePostgresqlNetworkOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork">ManagedDatabasePostgresqlNetwork</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork">ManagedDatabasePostgresqlNetwork</a>>

---


### ManagedDatabasePostgresqlNetworkOutputReference <a name="ManagedDatabasePostgresqlNetworkOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_postgresql.ManagedDatabasePostgresqlNetworkOutputReference;

new ManagedDatabasePostgresqlNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.familyInput">familyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.uuidInput">uuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.family">family</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork">ManagedDatabasePostgresqlNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `familyInput`<sup>Optional</sup> <a name="familyInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.familyInput"></a>

```java
public java.lang.String getFamilyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.uuidInput"></a>

```java
public java.lang.String getUuidInput();
```

- *Type:* java.lang.String

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork">ManagedDatabasePostgresqlNetwork</a>

---


### ManagedDatabasePostgresqlNodeStatesList <a name="ManagedDatabasePostgresqlNodeStatesList" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_postgresql.ManagedDatabasePostgresqlNodeStatesList;

new ManagedDatabasePostgresqlNodeStatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.get"></a>

```java
public ManagedDatabasePostgresqlNodeStatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ManagedDatabasePostgresqlNodeStatesOutputReference <a name="ManagedDatabasePostgresqlNodeStatesOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_postgresql.ManagedDatabasePostgresqlNodeStatesOutputReference;

new ManagedDatabasePostgresqlNodeStatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStates">ManagedDatabasePostgresqlNodeStates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.internalValue"></a>

```java
public ManagedDatabasePostgresqlNodeStates getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStates">ManagedDatabasePostgresqlNodeStates</a>

---


### ManagedDatabasePostgresqlPropertiesMigrationOutputReference <a name="ManagedDatabasePostgresqlPropertiesMigrationOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_postgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference;

new ManagedDatabasePostgresqlPropertiesMigrationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetDbname">resetDbname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetIgnoreDbs">resetIgnoreDbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetSsl">resetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDbname` <a name="resetDbname" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetDbname"></a>

```java
public void resetDbname()
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetHost"></a>

```java
public void resetHost()
```

##### `resetIgnoreDbs` <a name="resetIgnoreDbs" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetIgnoreDbs"></a>

```java
public void resetIgnoreDbs()
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetSsl` <a name="resetSsl" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetSsl"></a>

```java
public void resetSsl()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.dbnameInput">dbnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ignoreDbsInput">ignoreDbsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.sslInput">sslInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.dbname">dbname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ignoreDbs">ignoreDbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ssl">ssl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbnameInput`<sup>Optional</sup> <a name="dbnameInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.dbnameInput"></a>

```java
public java.lang.String getDbnameInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `ignoreDbsInput`<sup>Optional</sup> <a name="ignoreDbsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ignoreDbsInput"></a>

```java
public java.lang.String getIgnoreDbsInput();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `sslInput`<sup>Optional</sup> <a name="sslInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.sslInput"></a>

```java
public java.lang.Object getSslInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `dbname`<sup>Required</sup> <a name="dbname" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.dbname"></a>

```java
public java.lang.String getDbname();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `ignoreDbs`<sup>Required</sup> <a name="ignoreDbs" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ignoreDbs"></a>

```java
public java.lang.String getIgnoreDbs();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ssl"></a>

```java
public java.lang.Object getSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.internalValue"></a>

```java
public ManagedDatabasePostgresqlPropertiesMigration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a>

---


### ManagedDatabasePostgresqlPropertiesOutputReference <a name="ManagedDatabasePostgresqlPropertiesOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_postgresql.ManagedDatabasePostgresqlPropertiesOutputReference;

new ManagedDatabasePostgresqlPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putMigration">putMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPgaudit">putPgaudit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPgbouncer">putPgbouncer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPglookout">putPglookout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putTimescaledb">putTimescaledb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAdminPassword">resetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAdminUsername">resetAdminUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter">resetAutomaticUtilityNetworkIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumAnalyzeScaleFactor">resetAutovacuumAnalyzeScaleFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumAnalyzeThreshold">resetAutovacuumAnalyzeThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumFreezeMaxAge">resetAutovacuumFreezeMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumMaxWorkers">resetAutovacuumMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumNaptime">resetAutovacuumNaptime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumCostDelay">resetAutovacuumVacuumCostDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumCostLimit">resetAutovacuumVacuumCostLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumScaleFactor">resetAutovacuumVacuumScaleFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumThreshold">resetAutovacuumVacuumThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBackupHour">resetBackupHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBackupMinute">resetBackupMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterDelay">resetBgwriterDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterFlushAfter">resetBgwriterFlushAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterLruMaxpages">resetBgwriterLruMaxpages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterLruMultiplier">resetBgwriterLruMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetDeadlockTimeout">resetDeadlockTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetDefaultToastCompression">resetDefaultToastCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetIdleInTransactionSessionTimeout">resetIdleInTransactionSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetIpFilter">resetIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetJit">resetJit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogAutovacuumMinDuration">resetLogAutovacuumMinDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogErrorVerbosity">resetLogErrorVerbosity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogLinePrefix">resetLogLinePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogMinDurationStatement">resetLogMinDurationStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogTempFiles">resetLogTempFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxFilesPerProcess">resetMaxFilesPerProcess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxLocksPerTransaction">resetMaxLocksPerTransaction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxLogicalReplicationWorkers">resetMaxLogicalReplicationWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxParallelWorkers">resetMaxParallelWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxParallelWorkersPerGather">resetMaxParallelWorkersPerGather</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxPredLocksPerTransaction">resetMaxPredLocksPerTransaction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxPreparedTransactions">resetMaxPreparedTransactions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxReplicationSlots">resetMaxReplicationSlots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxSlotWalKeepSize">resetMaxSlotWalKeepSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxStackDepth">resetMaxStackDepth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxStandbyArchiveDelay">resetMaxStandbyArchiveDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxStandbyStreamingDelay">resetMaxStandbyStreamingDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxWalSenders">resetMaxWalSenders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxWorkerProcesses">resetMaxWorkerProcesses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMigration">resetMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgaudit">resetPgaudit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgbouncer">resetPgbouncer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPglookout">resetPglookout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgPartmanBgwInterval">resetPgPartmanBgwInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgPartmanBgwRole">resetPgPartmanBgwRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatMonitorEnable">resetPgStatMonitorEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatMonitorPgsmEnableQueryPlan">resetPgStatMonitorPgsmEnableQueryPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatMonitorPgsmMaxBuckets">resetPgStatMonitorPgsmMaxBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatStatementsTrack">resetPgStatStatementsTrack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPublicAccess">resetPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetServiceLog">resetServiceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetSharedBuffersPercentage">resetSharedBuffersPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetSynchronousReplication">resetSynchronousReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTempFileLimit">resetTempFileLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTimescaledb">resetTimescaledb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTimezone">resetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackActivityQuerySize">resetTrackActivityQuerySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackCommitTimestamp">resetTrackCommitTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackFunctions">resetTrackFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackIoTiming">resetTrackIoTiming</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetVariant">resetVariant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetVersion">resetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetWalSenderTimeout">resetWalSenderTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetWalWriterDelay">resetWalWriterDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetWorkMem">resetWorkMem</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMigration` <a name="putMigration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putMigration"></a>

```java
public void putMigration(ManagedDatabasePostgresqlPropertiesMigration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putMigration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a>

---

##### `putPgaudit` <a name="putPgaudit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPgaudit"></a>

```java
public void putPgaudit(ManagedDatabasePostgresqlPropertiesPgaudit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPgaudit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit">ManagedDatabasePostgresqlPropertiesPgaudit</a>

---

##### `putPgbouncer` <a name="putPgbouncer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPgbouncer"></a>

```java
public void putPgbouncer(ManagedDatabasePostgresqlPropertiesPgbouncer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPgbouncer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a>

---

##### `putPglookout` <a name="putPglookout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPglookout"></a>

```java
public void putPglookout(ManagedDatabasePostgresqlPropertiesPglookout value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPglookout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a>

---

##### `putTimescaledb` <a name="putTimescaledb" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putTimescaledb"></a>

```java
public void putTimescaledb(ManagedDatabasePostgresqlPropertiesTimescaledb value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putTimescaledb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a>

---

##### `resetAdminPassword` <a name="resetAdminPassword" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAdminPassword"></a>

```java
public void resetAdminPassword()
```

##### `resetAdminUsername` <a name="resetAdminUsername" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAdminUsername"></a>

```java
public void resetAdminUsername()
```

##### `resetAutomaticUtilityNetworkIpFilter` <a name="resetAutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter"></a>

```java
public void resetAutomaticUtilityNetworkIpFilter()
```

##### `resetAutovacuumAnalyzeScaleFactor` <a name="resetAutovacuumAnalyzeScaleFactor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumAnalyzeScaleFactor"></a>

```java
public void resetAutovacuumAnalyzeScaleFactor()
```

##### `resetAutovacuumAnalyzeThreshold` <a name="resetAutovacuumAnalyzeThreshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumAnalyzeThreshold"></a>

```java
public void resetAutovacuumAnalyzeThreshold()
```

##### `resetAutovacuumFreezeMaxAge` <a name="resetAutovacuumFreezeMaxAge" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumFreezeMaxAge"></a>

```java
public void resetAutovacuumFreezeMaxAge()
```

##### `resetAutovacuumMaxWorkers` <a name="resetAutovacuumMaxWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumMaxWorkers"></a>

```java
public void resetAutovacuumMaxWorkers()
```

##### `resetAutovacuumNaptime` <a name="resetAutovacuumNaptime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumNaptime"></a>

```java
public void resetAutovacuumNaptime()
```

##### `resetAutovacuumVacuumCostDelay` <a name="resetAutovacuumVacuumCostDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumCostDelay"></a>

```java
public void resetAutovacuumVacuumCostDelay()
```

##### `resetAutovacuumVacuumCostLimit` <a name="resetAutovacuumVacuumCostLimit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumCostLimit"></a>

```java
public void resetAutovacuumVacuumCostLimit()
```

##### `resetAutovacuumVacuumScaleFactor` <a name="resetAutovacuumVacuumScaleFactor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumScaleFactor"></a>

```java
public void resetAutovacuumVacuumScaleFactor()
```

##### `resetAutovacuumVacuumThreshold` <a name="resetAutovacuumVacuumThreshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumThreshold"></a>

```java
public void resetAutovacuumVacuumThreshold()
```

##### `resetBackupHour` <a name="resetBackupHour" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBackupHour"></a>

```java
public void resetBackupHour()
```

##### `resetBackupMinute` <a name="resetBackupMinute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBackupMinute"></a>

```java
public void resetBackupMinute()
```

##### `resetBgwriterDelay` <a name="resetBgwriterDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterDelay"></a>

```java
public void resetBgwriterDelay()
```

##### `resetBgwriterFlushAfter` <a name="resetBgwriterFlushAfter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterFlushAfter"></a>

```java
public void resetBgwriterFlushAfter()
```

##### `resetBgwriterLruMaxpages` <a name="resetBgwriterLruMaxpages" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterLruMaxpages"></a>

```java
public void resetBgwriterLruMaxpages()
```

##### `resetBgwriterLruMultiplier` <a name="resetBgwriterLruMultiplier" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterLruMultiplier"></a>

```java
public void resetBgwriterLruMultiplier()
```

##### `resetDeadlockTimeout` <a name="resetDeadlockTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetDeadlockTimeout"></a>

```java
public void resetDeadlockTimeout()
```

##### `resetDefaultToastCompression` <a name="resetDefaultToastCompression" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetDefaultToastCompression"></a>

```java
public void resetDefaultToastCompression()
```

##### `resetIdleInTransactionSessionTimeout` <a name="resetIdleInTransactionSessionTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetIdleInTransactionSessionTimeout"></a>

```java
public void resetIdleInTransactionSessionTimeout()
```

##### `resetIpFilter` <a name="resetIpFilter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetIpFilter"></a>

```java
public void resetIpFilter()
```

##### `resetJit` <a name="resetJit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetJit"></a>

```java
public void resetJit()
```

##### `resetLogAutovacuumMinDuration` <a name="resetLogAutovacuumMinDuration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogAutovacuumMinDuration"></a>

```java
public void resetLogAutovacuumMinDuration()
```

##### `resetLogErrorVerbosity` <a name="resetLogErrorVerbosity" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogErrorVerbosity"></a>

```java
public void resetLogErrorVerbosity()
```

##### `resetLogLinePrefix` <a name="resetLogLinePrefix" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogLinePrefix"></a>

```java
public void resetLogLinePrefix()
```

##### `resetLogMinDurationStatement` <a name="resetLogMinDurationStatement" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogMinDurationStatement"></a>

```java
public void resetLogMinDurationStatement()
```

##### `resetLogTempFiles` <a name="resetLogTempFiles" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogTempFiles"></a>

```java
public void resetLogTempFiles()
```

##### `resetMaxFilesPerProcess` <a name="resetMaxFilesPerProcess" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxFilesPerProcess"></a>

```java
public void resetMaxFilesPerProcess()
```

##### `resetMaxLocksPerTransaction` <a name="resetMaxLocksPerTransaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxLocksPerTransaction"></a>

```java
public void resetMaxLocksPerTransaction()
```

##### `resetMaxLogicalReplicationWorkers` <a name="resetMaxLogicalReplicationWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxLogicalReplicationWorkers"></a>

```java
public void resetMaxLogicalReplicationWorkers()
```

##### `resetMaxParallelWorkers` <a name="resetMaxParallelWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxParallelWorkers"></a>

```java
public void resetMaxParallelWorkers()
```

##### `resetMaxParallelWorkersPerGather` <a name="resetMaxParallelWorkersPerGather" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxParallelWorkersPerGather"></a>

```java
public void resetMaxParallelWorkersPerGather()
```

##### `resetMaxPredLocksPerTransaction` <a name="resetMaxPredLocksPerTransaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxPredLocksPerTransaction"></a>

```java
public void resetMaxPredLocksPerTransaction()
```

##### `resetMaxPreparedTransactions` <a name="resetMaxPreparedTransactions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxPreparedTransactions"></a>

```java
public void resetMaxPreparedTransactions()
```

##### `resetMaxReplicationSlots` <a name="resetMaxReplicationSlots" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxReplicationSlots"></a>

```java
public void resetMaxReplicationSlots()
```

##### `resetMaxSlotWalKeepSize` <a name="resetMaxSlotWalKeepSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxSlotWalKeepSize"></a>

```java
public void resetMaxSlotWalKeepSize()
```

##### `resetMaxStackDepth` <a name="resetMaxStackDepth" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxStackDepth"></a>

```java
public void resetMaxStackDepth()
```

##### `resetMaxStandbyArchiveDelay` <a name="resetMaxStandbyArchiveDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxStandbyArchiveDelay"></a>

```java
public void resetMaxStandbyArchiveDelay()
```

##### `resetMaxStandbyStreamingDelay` <a name="resetMaxStandbyStreamingDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxStandbyStreamingDelay"></a>

```java
public void resetMaxStandbyStreamingDelay()
```

##### `resetMaxWalSenders` <a name="resetMaxWalSenders" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxWalSenders"></a>

```java
public void resetMaxWalSenders()
```

##### `resetMaxWorkerProcesses` <a name="resetMaxWorkerProcesses" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxWorkerProcesses"></a>

```java
public void resetMaxWorkerProcesses()
```

##### `resetMigration` <a name="resetMigration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMigration"></a>

```java
public void resetMigration()
```

##### `resetPgaudit` <a name="resetPgaudit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgaudit"></a>

```java
public void resetPgaudit()
```

##### `resetPgbouncer` <a name="resetPgbouncer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgbouncer"></a>

```java
public void resetPgbouncer()
```

##### `resetPglookout` <a name="resetPglookout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPglookout"></a>

```java
public void resetPglookout()
```

##### `resetPgPartmanBgwInterval` <a name="resetPgPartmanBgwInterval" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgPartmanBgwInterval"></a>

```java
public void resetPgPartmanBgwInterval()
```

##### `resetPgPartmanBgwRole` <a name="resetPgPartmanBgwRole" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgPartmanBgwRole"></a>

```java
public void resetPgPartmanBgwRole()
```

##### `resetPgStatMonitorEnable` <a name="resetPgStatMonitorEnable" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatMonitorEnable"></a>

```java
public void resetPgStatMonitorEnable()
```

##### `resetPgStatMonitorPgsmEnableQueryPlan` <a name="resetPgStatMonitorPgsmEnableQueryPlan" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatMonitorPgsmEnableQueryPlan"></a>

```java
public void resetPgStatMonitorPgsmEnableQueryPlan()
```

##### `resetPgStatMonitorPgsmMaxBuckets` <a name="resetPgStatMonitorPgsmMaxBuckets" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatMonitorPgsmMaxBuckets"></a>

```java
public void resetPgStatMonitorPgsmMaxBuckets()
```

##### `resetPgStatStatementsTrack` <a name="resetPgStatStatementsTrack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatStatementsTrack"></a>

```java
public void resetPgStatStatementsTrack()
```

##### `resetPublicAccess` <a name="resetPublicAccess" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPublicAccess"></a>

```java
public void resetPublicAccess()
```

##### `resetServiceLog` <a name="resetServiceLog" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetServiceLog"></a>

```java
public void resetServiceLog()
```

##### `resetSharedBuffersPercentage` <a name="resetSharedBuffersPercentage" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetSharedBuffersPercentage"></a>

```java
public void resetSharedBuffersPercentage()
```

##### `resetSynchronousReplication` <a name="resetSynchronousReplication" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetSynchronousReplication"></a>

```java
public void resetSynchronousReplication()
```

##### `resetTempFileLimit` <a name="resetTempFileLimit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTempFileLimit"></a>

```java
public void resetTempFileLimit()
```

##### `resetTimescaledb` <a name="resetTimescaledb" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTimescaledb"></a>

```java
public void resetTimescaledb()
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTimezone"></a>

```java
public void resetTimezone()
```

##### `resetTrackActivityQuerySize` <a name="resetTrackActivityQuerySize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackActivityQuerySize"></a>

```java
public void resetTrackActivityQuerySize()
```

##### `resetTrackCommitTimestamp` <a name="resetTrackCommitTimestamp" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackCommitTimestamp"></a>

```java
public void resetTrackCommitTimestamp()
```

##### `resetTrackFunctions` <a name="resetTrackFunctions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackFunctions"></a>

```java
public void resetTrackFunctions()
```

##### `resetTrackIoTiming` <a name="resetTrackIoTiming" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackIoTiming"></a>

```java
public void resetTrackIoTiming()
```

##### `resetVariant` <a name="resetVariant" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetVariant"></a>

```java
public void resetVariant()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetVersion"></a>

```java
public void resetVersion()
```

##### `resetWalSenderTimeout` <a name="resetWalSenderTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetWalSenderTimeout"></a>

```java
public void resetWalSenderTimeout()
```

##### `resetWalWriterDelay` <a name="resetWalWriterDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetWalWriterDelay"></a>

```java
public void resetWalWriterDelay()
```

##### `resetWorkMem` <a name="resetWorkMem" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetWorkMem"></a>

```java
public void resetWorkMem()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.migration">migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference">ManagedDatabasePostgresqlPropertiesMigrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgaudit">pgaudit</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference">ManagedDatabasePostgresqlPropertiesPgauditOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgbouncer">pgbouncer</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference">ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pglookout">pglookout</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference">ManagedDatabasePostgresqlPropertiesPglookoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timescaledb">timescaledb</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference">ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminPasswordInput">adminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminUsernameInput">adminUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput">automaticUtilityNetworkIpFilterInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeScaleFactorInput">autovacuumAnalyzeScaleFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeThresholdInput">autovacuumAnalyzeThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumFreezeMaxAgeInput">autovacuumFreezeMaxAgeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumMaxWorkersInput">autovacuumMaxWorkersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumNaptimeInput">autovacuumNaptimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostDelayInput">autovacuumVacuumCostDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostLimitInput">autovacuumVacuumCostLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumScaleFactorInput">autovacuumVacuumScaleFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumThresholdInput">autovacuumVacuumThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupHourInput">backupHourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupMinuteInput">backupMinuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterDelayInput">bgwriterDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterFlushAfterInput">bgwriterFlushAfterInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMaxpagesInput">bgwriterLruMaxpagesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMultiplierInput">bgwriterLruMultiplierInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.deadlockTimeoutInput">deadlockTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.defaultToastCompressionInput">defaultToastCompressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.idleInTransactionSessionTimeoutInput">idleInTransactionSessionTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.ipFilterInput">ipFilterInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.jitInput">jitInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logAutovacuumMinDurationInput">logAutovacuumMinDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logErrorVerbosityInput">logErrorVerbosityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logLinePrefixInput">logLinePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logMinDurationStatementInput">logMinDurationStatementInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logTempFilesInput">logTempFilesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxFilesPerProcessInput">maxFilesPerProcessInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLocksPerTransactionInput">maxLocksPerTransactionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLogicalReplicationWorkersInput">maxLogicalReplicationWorkersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersInput">maxParallelWorkersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersPerGatherInput">maxParallelWorkersPerGatherInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPredLocksPerTransactionInput">maxPredLocksPerTransactionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPreparedTransactionsInput">maxPreparedTransactionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxReplicationSlotsInput">maxReplicationSlotsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxSlotWalKeepSizeInput">maxSlotWalKeepSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStackDepthInput">maxStackDepthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyArchiveDelayInput">maxStandbyArchiveDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyStreamingDelayInput">maxStandbyStreamingDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWalSendersInput">maxWalSendersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWorkerProcessesInput">maxWorkerProcessesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.migrationInput">migrationInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgauditInput">pgauditInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit">ManagedDatabasePostgresqlPropertiesPgaudit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgbouncerInput">pgbouncerInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pglookoutInput">pglookoutInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwIntervalInput">pgPartmanBgwIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwRoleInput">pgPartmanBgwRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorEnableInput">pgStatMonitorEnableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmEnableQueryPlanInput">pgStatMonitorPgsmEnableQueryPlanInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmMaxBucketsInput">pgStatMonitorPgsmMaxBucketsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatStatementsTrackInput">pgStatStatementsTrackInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.publicAccessInput">publicAccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.serviceLogInput">serviceLogInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.sharedBuffersPercentageInput">sharedBuffersPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.synchronousReplicationInput">synchronousReplicationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.tempFileLimitInput">tempFileLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timescaledbInput">timescaledbInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackActivityQuerySizeInput">trackActivityQuerySizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackCommitTimestampInput">trackCommitTimestampInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackFunctionsInput">trackFunctionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackIoTimingInput">trackIoTimingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.variantInput">variantInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walSenderTimeoutInput">walSenderTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walWriterDelayInput">walWriterDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.workMemInput">workMemInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilter">automaticUtilityNetworkIpFilter</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeScaleFactor">autovacuumAnalyzeScaleFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeThreshold">autovacuumAnalyzeThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumFreezeMaxAge">autovacuumFreezeMaxAge</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumMaxWorkers">autovacuumMaxWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumNaptime">autovacuumNaptime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostDelay">autovacuumVacuumCostDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostLimit">autovacuumVacuumCostLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumScaleFactor">autovacuumVacuumScaleFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumThreshold">autovacuumVacuumThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupHour">backupHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupMinute">backupMinute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterDelay">bgwriterDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterFlushAfter">bgwriterFlushAfter</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMaxpages">bgwriterLruMaxpages</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMultiplier">bgwriterLruMultiplier</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.deadlockTimeout">deadlockTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.defaultToastCompression">defaultToastCompression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.idleInTransactionSessionTimeout">idleInTransactionSessionTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.ipFilter">ipFilter</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.jit">jit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logAutovacuumMinDuration">logAutovacuumMinDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logErrorVerbosity">logErrorVerbosity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logLinePrefix">logLinePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logMinDurationStatement">logMinDurationStatement</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logTempFiles">logTempFiles</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxFilesPerProcess">maxFilesPerProcess</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLocksPerTransaction">maxLocksPerTransaction</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLogicalReplicationWorkers">maxLogicalReplicationWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkers">maxParallelWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersPerGather">maxParallelWorkersPerGather</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPredLocksPerTransaction">maxPredLocksPerTransaction</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPreparedTransactions">maxPreparedTransactions</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxReplicationSlots">maxReplicationSlots</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxSlotWalKeepSize">maxSlotWalKeepSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStackDepth">maxStackDepth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyArchiveDelay">maxStandbyArchiveDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyStreamingDelay">maxStandbyStreamingDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWalSenders">maxWalSenders</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWorkerProcesses">maxWorkerProcesses</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwInterval">pgPartmanBgwInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwRole">pgPartmanBgwRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorEnable">pgStatMonitorEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmEnableQueryPlan">pgStatMonitorPgsmEnableQueryPlan</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmMaxBuckets">pgStatMonitorPgsmMaxBuckets</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatStatementsTrack">pgStatStatementsTrack</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.publicAccess">publicAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.serviceLog">serviceLog</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.sharedBuffersPercentage">sharedBuffersPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.synchronousReplication">synchronousReplication</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.tempFileLimit">tempFileLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackActivityQuerySize">trackActivityQuerySize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackCommitTimestamp">trackCommitTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackFunctions">trackFunctions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackIoTiming">trackIoTiming</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.variant">variant</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walSenderTimeout">walSenderTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walWriterDelay">walWriterDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.workMem">workMem</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `migration`<sup>Required</sup> <a name="migration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.migration"></a>

```java
public ManagedDatabasePostgresqlPropertiesMigrationOutputReference getMigration();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference">ManagedDatabasePostgresqlPropertiesMigrationOutputReference</a>

---

##### `pgaudit`<sup>Required</sup> <a name="pgaudit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgaudit"></a>

```java
public ManagedDatabasePostgresqlPropertiesPgauditOutputReference getPgaudit();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference">ManagedDatabasePostgresqlPropertiesPgauditOutputReference</a>

---

##### `pgbouncer`<sup>Required</sup> <a name="pgbouncer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgbouncer"></a>

```java
public ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference getPgbouncer();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference">ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference</a>

---

##### `pglookout`<sup>Required</sup> <a name="pglookout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pglookout"></a>

```java
public ManagedDatabasePostgresqlPropertiesPglookoutOutputReference getPglookout();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference">ManagedDatabasePostgresqlPropertiesPglookoutOutputReference</a>

---

##### `timescaledb`<sup>Required</sup> <a name="timescaledb" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timescaledb"></a>

```java
public ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference getTimescaledb();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference">ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference</a>

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminPasswordInput"></a>

```java
public java.lang.String getAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `adminUsernameInput`<sup>Optional</sup> <a name="adminUsernameInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminUsernameInput"></a>

```java
public java.lang.String getAdminUsernameInput();
```

- *Type:* java.lang.String

---

##### `automaticUtilityNetworkIpFilterInput`<sup>Optional</sup> <a name="automaticUtilityNetworkIpFilterInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput"></a>

```java
public java.lang.Object getAutomaticUtilityNetworkIpFilterInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autovacuumAnalyzeScaleFactorInput`<sup>Optional</sup> <a name="autovacuumAnalyzeScaleFactorInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeScaleFactorInput"></a>

```java
public java.lang.Number getAutovacuumAnalyzeScaleFactorInput();
```

- *Type:* java.lang.Number

---

##### `autovacuumAnalyzeThresholdInput`<sup>Optional</sup> <a name="autovacuumAnalyzeThresholdInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeThresholdInput"></a>

```java
public java.lang.Number getAutovacuumAnalyzeThresholdInput();
```

- *Type:* java.lang.Number

---

##### `autovacuumFreezeMaxAgeInput`<sup>Optional</sup> <a name="autovacuumFreezeMaxAgeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumFreezeMaxAgeInput"></a>

```java
public java.lang.Number getAutovacuumFreezeMaxAgeInput();
```

- *Type:* java.lang.Number

---

##### `autovacuumMaxWorkersInput`<sup>Optional</sup> <a name="autovacuumMaxWorkersInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumMaxWorkersInput"></a>

```java
public java.lang.Number getAutovacuumMaxWorkersInput();
```

- *Type:* java.lang.Number

---

##### `autovacuumNaptimeInput`<sup>Optional</sup> <a name="autovacuumNaptimeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumNaptimeInput"></a>

```java
public java.lang.Number getAutovacuumNaptimeInput();
```

- *Type:* java.lang.Number

---

##### `autovacuumVacuumCostDelayInput`<sup>Optional</sup> <a name="autovacuumVacuumCostDelayInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostDelayInput"></a>

```java
public java.lang.Number getAutovacuumVacuumCostDelayInput();
```

- *Type:* java.lang.Number

---

##### `autovacuumVacuumCostLimitInput`<sup>Optional</sup> <a name="autovacuumVacuumCostLimitInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostLimitInput"></a>

```java
public java.lang.Number getAutovacuumVacuumCostLimitInput();
```

- *Type:* java.lang.Number

---

##### `autovacuumVacuumScaleFactorInput`<sup>Optional</sup> <a name="autovacuumVacuumScaleFactorInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumScaleFactorInput"></a>

```java
public java.lang.Number getAutovacuumVacuumScaleFactorInput();
```

- *Type:* java.lang.Number

---

##### `autovacuumVacuumThresholdInput`<sup>Optional</sup> <a name="autovacuumVacuumThresholdInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumThresholdInput"></a>

```java
public java.lang.Number getAutovacuumVacuumThresholdInput();
```

- *Type:* java.lang.Number

---

##### `backupHourInput`<sup>Optional</sup> <a name="backupHourInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupHourInput"></a>

```java
public java.lang.Number getBackupHourInput();
```

- *Type:* java.lang.Number

---

##### `backupMinuteInput`<sup>Optional</sup> <a name="backupMinuteInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupMinuteInput"></a>

```java
public java.lang.Number getBackupMinuteInput();
```

- *Type:* java.lang.Number

---

##### `bgwriterDelayInput`<sup>Optional</sup> <a name="bgwriterDelayInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterDelayInput"></a>

```java
public java.lang.Number getBgwriterDelayInput();
```

- *Type:* java.lang.Number

---

##### `bgwriterFlushAfterInput`<sup>Optional</sup> <a name="bgwriterFlushAfterInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterFlushAfterInput"></a>

```java
public java.lang.Number getBgwriterFlushAfterInput();
```

- *Type:* java.lang.Number

---

##### `bgwriterLruMaxpagesInput`<sup>Optional</sup> <a name="bgwriterLruMaxpagesInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMaxpagesInput"></a>

```java
public java.lang.Number getBgwriterLruMaxpagesInput();
```

- *Type:* java.lang.Number

---

##### `bgwriterLruMultiplierInput`<sup>Optional</sup> <a name="bgwriterLruMultiplierInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMultiplierInput"></a>

```java
public java.lang.Number getBgwriterLruMultiplierInput();
```

- *Type:* java.lang.Number

---

##### `deadlockTimeoutInput`<sup>Optional</sup> <a name="deadlockTimeoutInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.deadlockTimeoutInput"></a>

```java
public java.lang.Number getDeadlockTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `defaultToastCompressionInput`<sup>Optional</sup> <a name="defaultToastCompressionInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.defaultToastCompressionInput"></a>

```java
public java.lang.String getDefaultToastCompressionInput();
```

- *Type:* java.lang.String

---

##### `idleInTransactionSessionTimeoutInput`<sup>Optional</sup> <a name="idleInTransactionSessionTimeoutInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.idleInTransactionSessionTimeoutInput"></a>

```java
public java.lang.Number getIdleInTransactionSessionTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `ipFilterInput`<sup>Optional</sup> <a name="ipFilterInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.ipFilterInput"></a>

```java
public java.util.List<java.lang.String> getIpFilterInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jitInput`<sup>Optional</sup> <a name="jitInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.jitInput"></a>

```java
public java.lang.Object getJitInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logAutovacuumMinDurationInput`<sup>Optional</sup> <a name="logAutovacuumMinDurationInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logAutovacuumMinDurationInput"></a>

```java
public java.lang.Number getLogAutovacuumMinDurationInput();
```

- *Type:* java.lang.Number

---

##### `logErrorVerbosityInput`<sup>Optional</sup> <a name="logErrorVerbosityInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logErrorVerbosityInput"></a>

```java
public java.lang.String getLogErrorVerbosityInput();
```

- *Type:* java.lang.String

---

##### `logLinePrefixInput`<sup>Optional</sup> <a name="logLinePrefixInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logLinePrefixInput"></a>

```java
public java.lang.String getLogLinePrefixInput();
```

- *Type:* java.lang.String

---

##### `logMinDurationStatementInput`<sup>Optional</sup> <a name="logMinDurationStatementInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logMinDurationStatementInput"></a>

```java
public java.lang.Number getLogMinDurationStatementInput();
```

- *Type:* java.lang.Number

---

##### `logTempFilesInput`<sup>Optional</sup> <a name="logTempFilesInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logTempFilesInput"></a>

```java
public java.lang.Number getLogTempFilesInput();
```

- *Type:* java.lang.Number

---

##### `maxFilesPerProcessInput`<sup>Optional</sup> <a name="maxFilesPerProcessInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxFilesPerProcessInput"></a>

```java
public java.lang.Number getMaxFilesPerProcessInput();
```

- *Type:* java.lang.Number

---

##### `maxLocksPerTransactionInput`<sup>Optional</sup> <a name="maxLocksPerTransactionInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLocksPerTransactionInput"></a>

```java
public java.lang.Number getMaxLocksPerTransactionInput();
```

- *Type:* java.lang.Number

---

##### `maxLogicalReplicationWorkersInput`<sup>Optional</sup> <a name="maxLogicalReplicationWorkersInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLogicalReplicationWorkersInput"></a>

```java
public java.lang.Number getMaxLogicalReplicationWorkersInput();
```

- *Type:* java.lang.Number

---

##### `maxParallelWorkersInput`<sup>Optional</sup> <a name="maxParallelWorkersInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersInput"></a>

```java
public java.lang.Number getMaxParallelWorkersInput();
```

- *Type:* java.lang.Number

---

##### `maxParallelWorkersPerGatherInput`<sup>Optional</sup> <a name="maxParallelWorkersPerGatherInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersPerGatherInput"></a>

```java
public java.lang.Number getMaxParallelWorkersPerGatherInput();
```

- *Type:* java.lang.Number

---

##### `maxPredLocksPerTransactionInput`<sup>Optional</sup> <a name="maxPredLocksPerTransactionInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPredLocksPerTransactionInput"></a>

```java
public java.lang.Number getMaxPredLocksPerTransactionInput();
```

- *Type:* java.lang.Number

---

##### `maxPreparedTransactionsInput`<sup>Optional</sup> <a name="maxPreparedTransactionsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPreparedTransactionsInput"></a>

```java
public java.lang.Number getMaxPreparedTransactionsInput();
```

- *Type:* java.lang.Number

---

##### `maxReplicationSlotsInput`<sup>Optional</sup> <a name="maxReplicationSlotsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxReplicationSlotsInput"></a>

```java
public java.lang.Number getMaxReplicationSlotsInput();
```

- *Type:* java.lang.Number

---

##### `maxSlotWalKeepSizeInput`<sup>Optional</sup> <a name="maxSlotWalKeepSizeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxSlotWalKeepSizeInput"></a>

```java
public java.lang.Number getMaxSlotWalKeepSizeInput();
```

- *Type:* java.lang.Number

---

##### `maxStackDepthInput`<sup>Optional</sup> <a name="maxStackDepthInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStackDepthInput"></a>

```java
public java.lang.Number getMaxStackDepthInput();
```

- *Type:* java.lang.Number

---

##### `maxStandbyArchiveDelayInput`<sup>Optional</sup> <a name="maxStandbyArchiveDelayInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyArchiveDelayInput"></a>

```java
public java.lang.Number getMaxStandbyArchiveDelayInput();
```

- *Type:* java.lang.Number

---

##### `maxStandbyStreamingDelayInput`<sup>Optional</sup> <a name="maxStandbyStreamingDelayInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyStreamingDelayInput"></a>

```java
public java.lang.Number getMaxStandbyStreamingDelayInput();
```

- *Type:* java.lang.Number

---

##### `maxWalSendersInput`<sup>Optional</sup> <a name="maxWalSendersInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWalSendersInput"></a>

```java
public java.lang.Number getMaxWalSendersInput();
```

- *Type:* java.lang.Number

---

##### `maxWorkerProcessesInput`<sup>Optional</sup> <a name="maxWorkerProcessesInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWorkerProcessesInput"></a>

```java
public java.lang.Number getMaxWorkerProcessesInput();
```

- *Type:* java.lang.Number

---

##### `migrationInput`<sup>Optional</sup> <a name="migrationInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.migrationInput"></a>

```java
public ManagedDatabasePostgresqlPropertiesMigration getMigrationInput();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a>

---

##### `pgauditInput`<sup>Optional</sup> <a name="pgauditInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgauditInput"></a>

```java
public ManagedDatabasePostgresqlPropertiesPgaudit getPgauditInput();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit">ManagedDatabasePostgresqlPropertiesPgaudit</a>

---

##### `pgbouncerInput`<sup>Optional</sup> <a name="pgbouncerInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgbouncerInput"></a>

```java
public ManagedDatabasePostgresqlPropertiesPgbouncer getPgbouncerInput();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a>

---

##### `pglookoutInput`<sup>Optional</sup> <a name="pglookoutInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pglookoutInput"></a>

```java
public ManagedDatabasePostgresqlPropertiesPglookout getPglookoutInput();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a>

---

##### `pgPartmanBgwIntervalInput`<sup>Optional</sup> <a name="pgPartmanBgwIntervalInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwIntervalInput"></a>

```java
public java.lang.Number getPgPartmanBgwIntervalInput();
```

- *Type:* java.lang.Number

---

##### `pgPartmanBgwRoleInput`<sup>Optional</sup> <a name="pgPartmanBgwRoleInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwRoleInput"></a>

```java
public java.lang.String getPgPartmanBgwRoleInput();
```

- *Type:* java.lang.String

---

##### `pgStatMonitorEnableInput`<sup>Optional</sup> <a name="pgStatMonitorEnableInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorEnableInput"></a>

```java
public java.lang.Object getPgStatMonitorEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pgStatMonitorPgsmEnableQueryPlanInput`<sup>Optional</sup> <a name="pgStatMonitorPgsmEnableQueryPlanInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmEnableQueryPlanInput"></a>

```java
public java.lang.Object getPgStatMonitorPgsmEnableQueryPlanInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pgStatMonitorPgsmMaxBucketsInput`<sup>Optional</sup> <a name="pgStatMonitorPgsmMaxBucketsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmMaxBucketsInput"></a>

```java
public java.lang.Number getPgStatMonitorPgsmMaxBucketsInput();
```

- *Type:* java.lang.Number

---

##### `pgStatStatementsTrackInput`<sup>Optional</sup> <a name="pgStatStatementsTrackInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatStatementsTrackInput"></a>

```java
public java.lang.String getPgStatStatementsTrackInput();
```

- *Type:* java.lang.String

---

##### `publicAccessInput`<sup>Optional</sup> <a name="publicAccessInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.publicAccessInput"></a>

```java
public java.lang.Object getPublicAccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceLogInput`<sup>Optional</sup> <a name="serviceLogInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.serviceLogInput"></a>

```java
public java.lang.Object getServiceLogInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sharedBuffersPercentageInput`<sup>Optional</sup> <a name="sharedBuffersPercentageInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.sharedBuffersPercentageInput"></a>

```java
public java.lang.Number getSharedBuffersPercentageInput();
```

- *Type:* java.lang.Number

---

##### `synchronousReplicationInput`<sup>Optional</sup> <a name="synchronousReplicationInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.synchronousReplicationInput"></a>

```java
public java.lang.String getSynchronousReplicationInput();
```

- *Type:* java.lang.String

---

##### `tempFileLimitInput`<sup>Optional</sup> <a name="tempFileLimitInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.tempFileLimitInput"></a>

```java
public java.lang.Number getTempFileLimitInput();
```

- *Type:* java.lang.Number

---

##### `timescaledbInput`<sup>Optional</sup> <a name="timescaledbInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timescaledbInput"></a>

```java
public ManagedDatabasePostgresqlPropertiesTimescaledb getTimescaledbInput();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a>

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `trackActivityQuerySizeInput`<sup>Optional</sup> <a name="trackActivityQuerySizeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackActivityQuerySizeInput"></a>

```java
public java.lang.Number getTrackActivityQuerySizeInput();
```

- *Type:* java.lang.Number

---

##### `trackCommitTimestampInput`<sup>Optional</sup> <a name="trackCommitTimestampInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackCommitTimestampInput"></a>

```java
public java.lang.String getTrackCommitTimestampInput();
```

- *Type:* java.lang.String

---

##### `trackFunctionsInput`<sup>Optional</sup> <a name="trackFunctionsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackFunctionsInput"></a>

```java
public java.lang.String getTrackFunctionsInput();
```

- *Type:* java.lang.String

---

##### `trackIoTimingInput`<sup>Optional</sup> <a name="trackIoTimingInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackIoTimingInput"></a>

```java
public java.lang.String getTrackIoTimingInput();
```

- *Type:* java.lang.String

---

##### `variantInput`<sup>Optional</sup> <a name="variantInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.variantInput"></a>

```java
public java.lang.String getVariantInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `walSenderTimeoutInput`<sup>Optional</sup> <a name="walSenderTimeoutInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walSenderTimeoutInput"></a>

```java
public java.lang.Number getWalSenderTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `walWriterDelayInput`<sup>Optional</sup> <a name="walWriterDelayInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walWriterDelayInput"></a>

```java
public java.lang.Number getWalWriterDelayInput();
```

- *Type:* java.lang.Number

---

##### `workMemInput`<sup>Optional</sup> <a name="workMemInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.workMemInput"></a>

```java
public java.lang.Number getWorkMemInput();
```

- *Type:* java.lang.Number

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

---

##### `automaticUtilityNetworkIpFilter`<sup>Required</sup> <a name="automaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilter"></a>

```java
public java.lang.Object getAutomaticUtilityNetworkIpFilter();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autovacuumAnalyzeScaleFactor`<sup>Required</sup> <a name="autovacuumAnalyzeScaleFactor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeScaleFactor"></a>

```java
public java.lang.Number getAutovacuumAnalyzeScaleFactor();
```

- *Type:* java.lang.Number

---

##### `autovacuumAnalyzeThreshold`<sup>Required</sup> <a name="autovacuumAnalyzeThreshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeThreshold"></a>

```java
public java.lang.Number getAutovacuumAnalyzeThreshold();
```

- *Type:* java.lang.Number

---

##### `autovacuumFreezeMaxAge`<sup>Required</sup> <a name="autovacuumFreezeMaxAge" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumFreezeMaxAge"></a>

```java
public java.lang.Number getAutovacuumFreezeMaxAge();
```

- *Type:* java.lang.Number

---

##### `autovacuumMaxWorkers`<sup>Required</sup> <a name="autovacuumMaxWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumMaxWorkers"></a>

```java
public java.lang.Number getAutovacuumMaxWorkers();
```

- *Type:* java.lang.Number

---

##### `autovacuumNaptime`<sup>Required</sup> <a name="autovacuumNaptime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumNaptime"></a>

```java
public java.lang.Number getAutovacuumNaptime();
```

- *Type:* java.lang.Number

---

##### `autovacuumVacuumCostDelay`<sup>Required</sup> <a name="autovacuumVacuumCostDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostDelay"></a>

```java
public java.lang.Number getAutovacuumVacuumCostDelay();
```

- *Type:* java.lang.Number

---

##### `autovacuumVacuumCostLimit`<sup>Required</sup> <a name="autovacuumVacuumCostLimit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostLimit"></a>

```java
public java.lang.Number getAutovacuumVacuumCostLimit();
```

- *Type:* java.lang.Number

---

##### `autovacuumVacuumScaleFactor`<sup>Required</sup> <a name="autovacuumVacuumScaleFactor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumScaleFactor"></a>

```java
public java.lang.Number getAutovacuumVacuumScaleFactor();
```

- *Type:* java.lang.Number

---

##### `autovacuumVacuumThreshold`<sup>Required</sup> <a name="autovacuumVacuumThreshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumThreshold"></a>

```java
public java.lang.Number getAutovacuumVacuumThreshold();
```

- *Type:* java.lang.Number

---

##### `backupHour`<sup>Required</sup> <a name="backupHour" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupHour"></a>

```java
public java.lang.Number getBackupHour();
```

- *Type:* java.lang.Number

---

##### `backupMinute`<sup>Required</sup> <a name="backupMinute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupMinute"></a>

```java
public java.lang.Number getBackupMinute();
```

- *Type:* java.lang.Number

---

##### `bgwriterDelay`<sup>Required</sup> <a name="bgwriterDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterDelay"></a>

```java
public java.lang.Number getBgwriterDelay();
```

- *Type:* java.lang.Number

---

##### `bgwriterFlushAfter`<sup>Required</sup> <a name="bgwriterFlushAfter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterFlushAfter"></a>

```java
public java.lang.Number getBgwriterFlushAfter();
```

- *Type:* java.lang.Number

---

##### `bgwriterLruMaxpages`<sup>Required</sup> <a name="bgwriterLruMaxpages" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMaxpages"></a>

```java
public java.lang.Number getBgwriterLruMaxpages();
```

- *Type:* java.lang.Number

---

##### `bgwriterLruMultiplier`<sup>Required</sup> <a name="bgwriterLruMultiplier" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMultiplier"></a>

```java
public java.lang.Number getBgwriterLruMultiplier();
```

- *Type:* java.lang.Number

---

##### `deadlockTimeout`<sup>Required</sup> <a name="deadlockTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.deadlockTimeout"></a>

```java
public java.lang.Number getDeadlockTimeout();
```

- *Type:* java.lang.Number

---

##### `defaultToastCompression`<sup>Required</sup> <a name="defaultToastCompression" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.defaultToastCompression"></a>

```java
public java.lang.String getDefaultToastCompression();
```

- *Type:* java.lang.String

---

##### `idleInTransactionSessionTimeout`<sup>Required</sup> <a name="idleInTransactionSessionTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.idleInTransactionSessionTimeout"></a>

```java
public java.lang.Number getIdleInTransactionSessionTimeout();
```

- *Type:* java.lang.Number

---

##### `ipFilter`<sup>Required</sup> <a name="ipFilter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.ipFilter"></a>

```java
public java.util.List<java.lang.String> getIpFilter();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jit`<sup>Required</sup> <a name="jit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.jit"></a>

```java
public java.lang.Object getJit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logAutovacuumMinDuration`<sup>Required</sup> <a name="logAutovacuumMinDuration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logAutovacuumMinDuration"></a>

```java
public java.lang.Number getLogAutovacuumMinDuration();
```

- *Type:* java.lang.Number

---

##### `logErrorVerbosity`<sup>Required</sup> <a name="logErrorVerbosity" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logErrorVerbosity"></a>

```java
public java.lang.String getLogErrorVerbosity();
```

- *Type:* java.lang.String

---

##### `logLinePrefix`<sup>Required</sup> <a name="logLinePrefix" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logLinePrefix"></a>

```java
public java.lang.String getLogLinePrefix();
```

- *Type:* java.lang.String

---

##### `logMinDurationStatement`<sup>Required</sup> <a name="logMinDurationStatement" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logMinDurationStatement"></a>

```java
public java.lang.Number getLogMinDurationStatement();
```

- *Type:* java.lang.Number

---

##### `logTempFiles`<sup>Required</sup> <a name="logTempFiles" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logTempFiles"></a>

```java
public java.lang.Number getLogTempFiles();
```

- *Type:* java.lang.Number

---

##### `maxFilesPerProcess`<sup>Required</sup> <a name="maxFilesPerProcess" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxFilesPerProcess"></a>

```java
public java.lang.Number getMaxFilesPerProcess();
```

- *Type:* java.lang.Number

---

##### `maxLocksPerTransaction`<sup>Required</sup> <a name="maxLocksPerTransaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLocksPerTransaction"></a>

```java
public java.lang.Number getMaxLocksPerTransaction();
```

- *Type:* java.lang.Number

---

##### `maxLogicalReplicationWorkers`<sup>Required</sup> <a name="maxLogicalReplicationWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLogicalReplicationWorkers"></a>

```java
public java.lang.Number getMaxLogicalReplicationWorkers();
```

- *Type:* java.lang.Number

---

##### `maxParallelWorkers`<sup>Required</sup> <a name="maxParallelWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkers"></a>

```java
public java.lang.Number getMaxParallelWorkers();
```

- *Type:* java.lang.Number

---

##### `maxParallelWorkersPerGather`<sup>Required</sup> <a name="maxParallelWorkersPerGather" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersPerGather"></a>

```java
public java.lang.Number getMaxParallelWorkersPerGather();
```

- *Type:* java.lang.Number

---

##### `maxPredLocksPerTransaction`<sup>Required</sup> <a name="maxPredLocksPerTransaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPredLocksPerTransaction"></a>

```java
public java.lang.Number getMaxPredLocksPerTransaction();
```

- *Type:* java.lang.Number

---

##### `maxPreparedTransactions`<sup>Required</sup> <a name="maxPreparedTransactions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPreparedTransactions"></a>

```java
public java.lang.Number getMaxPreparedTransactions();
```

- *Type:* java.lang.Number

---

##### `maxReplicationSlots`<sup>Required</sup> <a name="maxReplicationSlots" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxReplicationSlots"></a>

```java
public java.lang.Number getMaxReplicationSlots();
```

- *Type:* java.lang.Number

---

##### `maxSlotWalKeepSize`<sup>Required</sup> <a name="maxSlotWalKeepSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxSlotWalKeepSize"></a>

```java
public java.lang.Number getMaxSlotWalKeepSize();
```

- *Type:* java.lang.Number

---

##### `maxStackDepth`<sup>Required</sup> <a name="maxStackDepth" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStackDepth"></a>

```java
public java.lang.Number getMaxStackDepth();
```

- *Type:* java.lang.Number

---

##### `maxStandbyArchiveDelay`<sup>Required</sup> <a name="maxStandbyArchiveDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyArchiveDelay"></a>

```java
public java.lang.Number getMaxStandbyArchiveDelay();
```

- *Type:* java.lang.Number

---

##### `maxStandbyStreamingDelay`<sup>Required</sup> <a name="maxStandbyStreamingDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyStreamingDelay"></a>

```java
public java.lang.Number getMaxStandbyStreamingDelay();
```

- *Type:* java.lang.Number

---

##### `maxWalSenders`<sup>Required</sup> <a name="maxWalSenders" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWalSenders"></a>

```java
public java.lang.Number getMaxWalSenders();
```

- *Type:* java.lang.Number

---

##### `maxWorkerProcesses`<sup>Required</sup> <a name="maxWorkerProcesses" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWorkerProcesses"></a>

```java
public java.lang.Number getMaxWorkerProcesses();
```

- *Type:* java.lang.Number

---

##### `pgPartmanBgwInterval`<sup>Required</sup> <a name="pgPartmanBgwInterval" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwInterval"></a>

```java
public java.lang.Number getPgPartmanBgwInterval();
```

- *Type:* java.lang.Number

---

##### `pgPartmanBgwRole`<sup>Required</sup> <a name="pgPartmanBgwRole" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwRole"></a>

```java
public java.lang.String getPgPartmanBgwRole();
```

- *Type:* java.lang.String

---

##### `pgStatMonitorEnable`<sup>Required</sup> <a name="pgStatMonitorEnable" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorEnable"></a>

```java
public java.lang.Object getPgStatMonitorEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pgStatMonitorPgsmEnableQueryPlan`<sup>Required</sup> <a name="pgStatMonitorPgsmEnableQueryPlan" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmEnableQueryPlan"></a>

```java
public java.lang.Object getPgStatMonitorPgsmEnableQueryPlan();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pgStatMonitorPgsmMaxBuckets`<sup>Required</sup> <a name="pgStatMonitorPgsmMaxBuckets" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmMaxBuckets"></a>

```java
public java.lang.Number getPgStatMonitorPgsmMaxBuckets();
```

- *Type:* java.lang.Number

---

##### `pgStatStatementsTrack`<sup>Required</sup> <a name="pgStatStatementsTrack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatStatementsTrack"></a>

```java
public java.lang.String getPgStatStatementsTrack();
```

- *Type:* java.lang.String

---

##### `publicAccess`<sup>Required</sup> <a name="publicAccess" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.publicAccess"></a>

```java
public java.lang.Object getPublicAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceLog`<sup>Required</sup> <a name="serviceLog" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.serviceLog"></a>

```java
public java.lang.Object getServiceLog();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sharedBuffersPercentage`<sup>Required</sup> <a name="sharedBuffersPercentage" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.sharedBuffersPercentage"></a>

```java
public java.lang.Number getSharedBuffersPercentage();
```

- *Type:* java.lang.Number

---

##### `synchronousReplication`<sup>Required</sup> <a name="synchronousReplication" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.synchronousReplication"></a>

```java
public java.lang.String getSynchronousReplication();
```

- *Type:* java.lang.String

---

##### `tempFileLimit`<sup>Required</sup> <a name="tempFileLimit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.tempFileLimit"></a>

```java
public java.lang.Number getTempFileLimit();
```

- *Type:* java.lang.Number

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `trackActivityQuerySize`<sup>Required</sup> <a name="trackActivityQuerySize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackActivityQuerySize"></a>

```java
public java.lang.Number getTrackActivityQuerySize();
```

- *Type:* java.lang.Number

---

##### `trackCommitTimestamp`<sup>Required</sup> <a name="trackCommitTimestamp" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackCommitTimestamp"></a>

```java
public java.lang.String getTrackCommitTimestamp();
```

- *Type:* java.lang.String

---

##### `trackFunctions`<sup>Required</sup> <a name="trackFunctions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackFunctions"></a>

```java
public java.lang.String getTrackFunctions();
```

- *Type:* java.lang.String

---

##### `trackIoTiming`<sup>Required</sup> <a name="trackIoTiming" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackIoTiming"></a>

```java
public java.lang.String getTrackIoTiming();
```

- *Type:* java.lang.String

---

##### `variant`<sup>Required</sup> <a name="variant" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.variant"></a>

```java
public java.lang.String getVariant();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `walSenderTimeout`<sup>Required</sup> <a name="walSenderTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walSenderTimeout"></a>

```java
public java.lang.Number getWalSenderTimeout();
```

- *Type:* java.lang.Number

---

##### `walWriterDelay`<sup>Required</sup> <a name="walWriterDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walWriterDelay"></a>

```java
public java.lang.Number getWalWriterDelay();
```

- *Type:* java.lang.Number

---

##### `workMem`<sup>Required</sup> <a name="workMem" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.workMem"></a>

```java
public java.lang.Number getWorkMem();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.internalValue"></a>

```java
public ManagedDatabasePostgresqlProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a>

---


### ManagedDatabasePostgresqlPropertiesPgauditOutputReference <a name="ManagedDatabasePostgresqlPropertiesPgauditOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_postgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference;

new ManagedDatabasePostgresqlPropertiesPgauditOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetFeatureEnabled">resetFeatureEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLog">resetLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogCatalog">resetLogCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogClient">resetLogClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogLevel">resetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogMaxStringLength">resetLogMaxStringLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogNestedStatements">resetLogNestedStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogParameter">resetLogParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogParameterMaxSize">resetLogParameterMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogRelation">resetLogRelation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogRows">resetLogRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogStatement">resetLogStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogStatementOnce">resetLogStatementOnce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetRole">resetRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFeatureEnabled` <a name="resetFeatureEnabled" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetFeatureEnabled"></a>

```java
public void resetFeatureEnabled()
```

##### `resetLog` <a name="resetLog" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLog"></a>

```java
public void resetLog()
```

##### `resetLogCatalog` <a name="resetLogCatalog" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogCatalog"></a>

```java
public void resetLogCatalog()
```

##### `resetLogClient` <a name="resetLogClient" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogClient"></a>

```java
public void resetLogClient()
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogLevel"></a>

```java
public void resetLogLevel()
```

##### `resetLogMaxStringLength` <a name="resetLogMaxStringLength" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogMaxStringLength"></a>

```java
public void resetLogMaxStringLength()
```

##### `resetLogNestedStatements` <a name="resetLogNestedStatements" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogNestedStatements"></a>

```java
public void resetLogNestedStatements()
```

##### `resetLogParameter` <a name="resetLogParameter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogParameter"></a>

```java
public void resetLogParameter()
```

##### `resetLogParameterMaxSize` <a name="resetLogParameterMaxSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogParameterMaxSize"></a>

```java
public void resetLogParameterMaxSize()
```

##### `resetLogRelation` <a name="resetLogRelation" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogRelation"></a>

```java
public void resetLogRelation()
```

##### `resetLogRows` <a name="resetLogRows" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogRows"></a>

```java
public void resetLogRows()
```

##### `resetLogStatement` <a name="resetLogStatement" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogStatement"></a>

```java
public void resetLogStatement()
```

##### `resetLogStatementOnce` <a name="resetLogStatementOnce" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogStatementOnce"></a>

```java
public void resetLogStatementOnce()
```

##### `resetRole` <a name="resetRole" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetRole"></a>

```java
public void resetRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.featureEnabledInput">featureEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logCatalogInput">logCatalogInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logClientInput">logClientInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logInput">logInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logLevelInput">logLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logMaxStringLengthInput">logMaxStringLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logNestedStatementsInput">logNestedStatementsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logParameterInput">logParameterInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logParameterMaxSizeInput">logParameterMaxSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logRelationInput">logRelationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logRowsInput">logRowsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logStatementInput">logStatementInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logStatementOnceInput">logStatementOnceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.featureEnabled">featureEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.log">log</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logCatalog">logCatalog</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logClient">logClient</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logMaxStringLength">logMaxStringLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logNestedStatements">logNestedStatements</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logParameter">logParameter</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logParameterMaxSize">logParameterMaxSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logRelation">logRelation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logRows">logRows</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logStatement">logStatement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logStatementOnce">logStatementOnce</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit">ManagedDatabasePostgresqlPropertiesPgaudit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `featureEnabledInput`<sup>Optional</sup> <a name="featureEnabledInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.featureEnabledInput"></a>

```java
public java.lang.Object getFeatureEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logCatalogInput`<sup>Optional</sup> <a name="logCatalogInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logCatalogInput"></a>

```java
public java.lang.Object getLogCatalogInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logClientInput`<sup>Optional</sup> <a name="logClientInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logClientInput"></a>

```java
public java.lang.Object getLogClientInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logInput`<sup>Optional</sup> <a name="logInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logInput"></a>

```java
public java.util.List<java.lang.String> getLogInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logLevelInput"></a>

```java
public java.lang.String getLogLevelInput();
```

- *Type:* java.lang.String

---

##### `logMaxStringLengthInput`<sup>Optional</sup> <a name="logMaxStringLengthInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logMaxStringLengthInput"></a>

```java
public java.lang.Number getLogMaxStringLengthInput();
```

- *Type:* java.lang.Number

---

##### `logNestedStatementsInput`<sup>Optional</sup> <a name="logNestedStatementsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logNestedStatementsInput"></a>

```java
public java.lang.Object getLogNestedStatementsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logParameterInput`<sup>Optional</sup> <a name="logParameterInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logParameterInput"></a>

```java
public java.lang.Object getLogParameterInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logParameterMaxSizeInput`<sup>Optional</sup> <a name="logParameterMaxSizeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logParameterMaxSizeInput"></a>

```java
public java.lang.Number getLogParameterMaxSizeInput();
```

- *Type:* java.lang.Number

---

##### `logRelationInput`<sup>Optional</sup> <a name="logRelationInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logRelationInput"></a>

```java
public java.lang.Object getLogRelationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logRowsInput`<sup>Optional</sup> <a name="logRowsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logRowsInput"></a>

```java
public java.lang.Object getLogRowsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logStatementInput`<sup>Optional</sup> <a name="logStatementInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logStatementInput"></a>

```java
public java.lang.Object getLogStatementInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logStatementOnceInput`<sup>Optional</sup> <a name="logStatementOnceInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logStatementOnceInput"></a>

```java
public java.lang.Object getLogStatementOnceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `featureEnabled`<sup>Required</sup> <a name="featureEnabled" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.featureEnabled"></a>

```java
public java.lang.Object getFeatureEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `log`<sup>Required</sup> <a name="log" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.log"></a>

```java
public java.util.List<java.lang.String> getLog();
```

- *Type:* java.util.List<java.lang.String>

---

##### `logCatalog`<sup>Required</sup> <a name="logCatalog" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logCatalog"></a>

```java
public java.lang.Object getLogCatalog();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logClient`<sup>Required</sup> <a name="logClient" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logClient"></a>

```java
public java.lang.Object getLogClient();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `logMaxStringLength`<sup>Required</sup> <a name="logMaxStringLength" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logMaxStringLength"></a>

```java
public java.lang.Number getLogMaxStringLength();
```

- *Type:* java.lang.Number

---

##### `logNestedStatements`<sup>Required</sup> <a name="logNestedStatements" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logNestedStatements"></a>

```java
public java.lang.Object getLogNestedStatements();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logParameter`<sup>Required</sup> <a name="logParameter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logParameter"></a>

```java
public java.lang.Object getLogParameter();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logParameterMaxSize`<sup>Required</sup> <a name="logParameterMaxSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logParameterMaxSize"></a>

```java
public java.lang.Number getLogParameterMaxSize();
```

- *Type:* java.lang.Number

---

##### `logRelation`<sup>Required</sup> <a name="logRelation" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logRelation"></a>

```java
public java.lang.Object getLogRelation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logRows`<sup>Required</sup> <a name="logRows" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logRows"></a>

```java
public java.lang.Object getLogRows();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logStatement`<sup>Required</sup> <a name="logStatement" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logStatement"></a>

```java
public java.lang.Object getLogStatement();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logStatementOnce`<sup>Required</sup> <a name="logStatementOnce" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logStatementOnce"></a>

```java
public java.lang.Object getLogStatementOnce();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.internalValue"></a>

```java
public ManagedDatabasePostgresqlPropertiesPgaudit getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit">ManagedDatabasePostgresqlPropertiesPgaudit</a>

---


### ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference <a name="ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_postgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference;

new ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbIdleTimeout">resetAutodbIdleTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbMaxDbConnections">resetAutodbMaxDbConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbPoolMode">resetAutodbPoolMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbPoolSize">resetAutodbPoolSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetIgnoreStartupParameters">resetIgnoreStartupParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetMinPoolSize">resetMinPoolSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetServerIdleTimeout">resetServerIdleTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetServerLifetime">resetServerLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetServerResetQueryAlways">resetServerResetQueryAlways</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutodbIdleTimeout` <a name="resetAutodbIdleTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbIdleTimeout"></a>

```java
public void resetAutodbIdleTimeout()
```

##### `resetAutodbMaxDbConnections` <a name="resetAutodbMaxDbConnections" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbMaxDbConnections"></a>

```java
public void resetAutodbMaxDbConnections()
```

##### `resetAutodbPoolMode` <a name="resetAutodbPoolMode" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbPoolMode"></a>

```java
public void resetAutodbPoolMode()
```

##### `resetAutodbPoolSize` <a name="resetAutodbPoolSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbPoolSize"></a>

```java
public void resetAutodbPoolSize()
```

##### `resetIgnoreStartupParameters` <a name="resetIgnoreStartupParameters" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetIgnoreStartupParameters"></a>

```java
public void resetIgnoreStartupParameters()
```

##### `resetMinPoolSize` <a name="resetMinPoolSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetMinPoolSize"></a>

```java
public void resetMinPoolSize()
```

##### `resetServerIdleTimeout` <a name="resetServerIdleTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetServerIdleTimeout"></a>

```java
public void resetServerIdleTimeout()
```

##### `resetServerLifetime` <a name="resetServerLifetime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetServerLifetime"></a>

```java
public void resetServerLifetime()
```

##### `resetServerResetQueryAlways` <a name="resetServerResetQueryAlways" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetServerResetQueryAlways"></a>

```java
public void resetServerResetQueryAlways()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbIdleTimeoutInput">autodbIdleTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbMaxDbConnectionsInput">autodbMaxDbConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolModeInput">autodbPoolModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolSizeInput">autodbPoolSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.ignoreStartupParametersInput">ignoreStartupParametersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.minPoolSizeInput">minPoolSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverIdleTimeoutInput">serverIdleTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverLifetimeInput">serverLifetimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverResetQueryAlwaysInput">serverResetQueryAlwaysInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbIdleTimeout">autodbIdleTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbMaxDbConnections">autodbMaxDbConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolMode">autodbPoolMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolSize">autodbPoolSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.ignoreStartupParameters">ignoreStartupParameters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.minPoolSize">minPoolSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverIdleTimeout">serverIdleTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverLifetime">serverLifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverResetQueryAlways">serverResetQueryAlways</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autodbIdleTimeoutInput`<sup>Optional</sup> <a name="autodbIdleTimeoutInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbIdleTimeoutInput"></a>

```java
public java.lang.Number getAutodbIdleTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `autodbMaxDbConnectionsInput`<sup>Optional</sup> <a name="autodbMaxDbConnectionsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbMaxDbConnectionsInput"></a>

```java
public java.lang.Number getAutodbMaxDbConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `autodbPoolModeInput`<sup>Optional</sup> <a name="autodbPoolModeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolModeInput"></a>

```java
public java.lang.String getAutodbPoolModeInput();
```

- *Type:* java.lang.String

---

##### `autodbPoolSizeInput`<sup>Optional</sup> <a name="autodbPoolSizeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolSizeInput"></a>

```java
public java.lang.Number getAutodbPoolSizeInput();
```

- *Type:* java.lang.Number

---

##### `ignoreStartupParametersInput`<sup>Optional</sup> <a name="ignoreStartupParametersInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.ignoreStartupParametersInput"></a>

```java
public java.util.List<java.lang.String> getIgnoreStartupParametersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `minPoolSizeInput`<sup>Optional</sup> <a name="minPoolSizeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.minPoolSizeInput"></a>

```java
public java.lang.Number getMinPoolSizeInput();
```

- *Type:* java.lang.Number

---

##### `serverIdleTimeoutInput`<sup>Optional</sup> <a name="serverIdleTimeoutInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverIdleTimeoutInput"></a>

```java
public java.lang.Number getServerIdleTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `serverLifetimeInput`<sup>Optional</sup> <a name="serverLifetimeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverLifetimeInput"></a>

```java
public java.lang.Number getServerLifetimeInput();
```

- *Type:* java.lang.Number

---

##### `serverResetQueryAlwaysInput`<sup>Optional</sup> <a name="serverResetQueryAlwaysInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverResetQueryAlwaysInput"></a>

```java
public java.lang.Object getServerResetQueryAlwaysInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autodbIdleTimeout`<sup>Required</sup> <a name="autodbIdleTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbIdleTimeout"></a>

```java
public java.lang.Number getAutodbIdleTimeout();
```

- *Type:* java.lang.Number

---

##### `autodbMaxDbConnections`<sup>Required</sup> <a name="autodbMaxDbConnections" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbMaxDbConnections"></a>

```java
public java.lang.Number getAutodbMaxDbConnections();
```

- *Type:* java.lang.Number

---

##### `autodbPoolMode`<sup>Required</sup> <a name="autodbPoolMode" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolMode"></a>

```java
public java.lang.String getAutodbPoolMode();
```

- *Type:* java.lang.String

---

##### `autodbPoolSize`<sup>Required</sup> <a name="autodbPoolSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolSize"></a>

```java
public java.lang.Number getAutodbPoolSize();
```

- *Type:* java.lang.Number

---

##### `ignoreStartupParameters`<sup>Required</sup> <a name="ignoreStartupParameters" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.ignoreStartupParameters"></a>

```java
public java.util.List<java.lang.String> getIgnoreStartupParameters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `minPoolSize`<sup>Required</sup> <a name="minPoolSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.minPoolSize"></a>

```java
public java.lang.Number getMinPoolSize();
```

- *Type:* java.lang.Number

---

##### `serverIdleTimeout`<sup>Required</sup> <a name="serverIdleTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverIdleTimeout"></a>

```java
public java.lang.Number getServerIdleTimeout();
```

- *Type:* java.lang.Number

---

##### `serverLifetime`<sup>Required</sup> <a name="serverLifetime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverLifetime"></a>

```java
public java.lang.Number getServerLifetime();
```

- *Type:* java.lang.Number

---

##### `serverResetQueryAlways`<sup>Required</sup> <a name="serverResetQueryAlways" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverResetQueryAlways"></a>

```java
public java.lang.Object getServerResetQueryAlways();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.internalValue"></a>

```java
public ManagedDatabasePostgresqlPropertiesPgbouncer getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a>

---


### ManagedDatabasePostgresqlPropertiesPglookoutOutputReference <a name="ManagedDatabasePostgresqlPropertiesPglookoutOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_postgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference;

new ManagedDatabasePostgresqlPropertiesPglookoutOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.resetMaxFailoverReplicationTimeLag">resetMaxFailoverReplicationTimeLag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxFailoverReplicationTimeLag` <a name="resetMaxFailoverReplicationTimeLag" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.resetMaxFailoverReplicationTimeLag"></a>

```java
public void resetMaxFailoverReplicationTimeLag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.maxFailoverReplicationTimeLagInput">maxFailoverReplicationTimeLagInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.maxFailoverReplicationTimeLag">maxFailoverReplicationTimeLag</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxFailoverReplicationTimeLagInput`<sup>Optional</sup> <a name="maxFailoverReplicationTimeLagInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.maxFailoverReplicationTimeLagInput"></a>

```java
public java.lang.Number getMaxFailoverReplicationTimeLagInput();
```

- *Type:* java.lang.Number

---

##### `maxFailoverReplicationTimeLag`<sup>Required</sup> <a name="maxFailoverReplicationTimeLag" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.maxFailoverReplicationTimeLag"></a>

```java
public java.lang.Number getMaxFailoverReplicationTimeLag();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.internalValue"></a>

```java
public ManagedDatabasePostgresqlPropertiesPglookout getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a>

---


### ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference <a name="ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_postgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference;

new ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.resetMaxBackgroundWorkers">resetMaxBackgroundWorkers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxBackgroundWorkers` <a name="resetMaxBackgroundWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.resetMaxBackgroundWorkers"></a>

```java
public void resetMaxBackgroundWorkers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.maxBackgroundWorkersInput">maxBackgroundWorkersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.maxBackgroundWorkers">maxBackgroundWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxBackgroundWorkersInput`<sup>Optional</sup> <a name="maxBackgroundWorkersInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.maxBackgroundWorkersInput"></a>

```java
public java.lang.Number getMaxBackgroundWorkersInput();
```

- *Type:* java.lang.Number

---

##### `maxBackgroundWorkers`<sup>Required</sup> <a name="maxBackgroundWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.maxBackgroundWorkers"></a>

```java
public java.lang.Number getMaxBackgroundWorkers();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.internalValue"></a>

```java
public ManagedDatabasePostgresqlPropertiesTimescaledb getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a>

---



